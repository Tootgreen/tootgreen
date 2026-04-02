window.TGProducts = (function () {
  function lowerList(arr) {
    return (arr || []).map(function (x) {
      return String(x).toLowerCase().trim();
    });
  }

  function hasAny(text, words) {
    return words.some(function (word) {
      return text.indexOf(word) !== -1;
    });
  }

  function guessCategory(tags, title) {
    const all = lowerList(tags).concat(String(title || '').toLowerCase()).join(' ');

    if (hasAny(all, ['mug', 'mugs', 'cup'])) return 'Mugs';
    if (hasAny(all, ['badge', 'pin', 'pin badge'])) return 'Badges';
    if (hasAny(all, ['t-shirt', 'tshirt', 'shirt', 'hoodie', 'jumper', 'vest', 'babygrow', 'baby grow'])) return 'Clothing';
    if (hasAny(all, ['poster', 'print'])) return 'Posters';
    if (hasAny(all, ['card', 'greeting card'])) return 'Cards';
    if (hasAny(all, ['wall art', 'wall hanging', 'sign', 'plaque'])) return 'WallDeco';
    if (hasAny(all, ['slate', 'board', 'chopping board'])) return 'Slate';
    if (hasAny(all, ['teddy', 'bear', 'soft toy'])) return 'Teddies';
    if (hasAny(all, ['cushion', 'pillow'])) return 'Cushions';

    return 'Other';
  }

  function guessOccasions(tags, title) {
    const all = lowerList(tags).concat(String(title || '').toLowerCase()).join(' ');
    const occ = [];

    if (hasAny(all, ['birthday', 'bday'])) occ.push('Birthday');
    if (hasAny(all, ['anniversary'])) occ.push('Anniversary');
    if (hasAny(all, ['wedding', 'bride', 'groom'])) occ.push('Wedding');
    if (hasAny(all, ['baby', 'newborn', 'new baby', 'babygrow', 'baby grow'])) occ.push('NewBaby');
    if (hasAny(all, ['teacher', 'thank you', 'thankyou'])) occ.push('ThankYou');
    if (hasAny(all, ['leaving', 'retirement', 'goodbye', 'farewell'])) occ.push('LeavingDo');
    if (hasAny(all, ['christmas', 'xmas', 'santa'])) occ.push('Christmas');

    if (!occ.length) occ.push('JustBecause');

    return occ;
  }

  function getImage(listing) {
    if (listing.main_image && listing.main_image.url_570xN) return listing.main_image.url_570xN;
    if (listing.images && listing.images.length && listing.images[0].url_570xN) return listing.images[0].url_570xN;
    return '/images/about_hero.png';
  }

  function getPrice(listing) {
    if (listing.price && listing.price.amount && listing.price.divisor) {
      return Number(listing.price.amount) / Number(listing.price.divisor);
    }
    return 0;
  }

  function normaliseListing(listing) {
    return {
      id: listing.listing_id,
      pid: listing.listing_id,
      name: listing.title,
      cat: guessCategory(listing.tags, listing.title),
      occ: guessOccasions(listing.tags, listing.title),
      price: getPrice(listing),
      img: getImage(listing),
      url: listing.url,
      tags: listing.tags || []
    };
  }

  async function fetchAmazonUrls() {
    try {
      const res = await fetch('/amazon-urls.json');
      if (!res.ok) return {};
      return await res.json();
    } catch (e) {
      return {};
    }
  }

  async function fetchProducts() {
    const [etsyRes, amazonUrls] = await Promise.all([
      fetch('/api/etsy'),
      fetchAmazonUrls()
    ]);

    if (!etsyRes.ok) {
      throw new Error('Etsy request failed');
    }

    const data = await etsyRes.json();
    const listings = data.results || [];

    return listings.map(function(listing) {
      const product = normaliseListing(listing);
      const amz = amazonUrls[listing.title] || amazonUrls[String(listing.listing_id)];
      if (amz && typeof amz === 'string' && amz.trim()) {
        product.amz = amz.trim();
      }
      return product;
    });
  }

  return {
    fetchProducts: fetchProducts,
    guessCategory: guessCategory,
    guessOccasions: guessOccasions
  };
}());
