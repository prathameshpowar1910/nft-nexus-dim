const nfts = [
  { id: 1, name: "Cosmic Cube", artist: "PixelMaster", price: 0.5, image: "./images/nfts/1.avif", category: "art" },
  { id: 2, name: "Digital Dreamscape", artist: "CryptoArtist", price: 0.8, image: "./images/nfts/2.jpeg", category: "art" },
  { id: 3, name: "Neon Genesis", artist: "FutureWave", price: 1.2, image: "https://picsum.photos/seed/neon/400/400", category: "music" },
  { id: 4, name: "Quantum Quasar", artist: "StarDust", price: 0.7, image: "https://picsum.photos/seed/quantum/400/400", category: "collectibles" },
  { id: 5, name: "Cyber Serenity", artist: "DigitalZen", price: 0.9, image: "https://picsum.photos/seed/cyber/400/400", category: "art" }
];

function renderNFTs(nftList) {
  const nftContainer = document.getElementById('nft-container');
  nftContainer.innerHTML = '';

  nftList.forEach(nft => {
    const nftCard = document.createElement('div');
    nftCard.classList.add('bg-white', 'rounded-lg', 'shadow-md', 'p-4');
    nftCard.innerHTML = `
      <img src="${nft.image}" alt="${nft.name}" class="w-full h-48 object-cover rounded-md mb-4">
      <h3 class="text-lg font-semibold">${nft.name}</h3>
      <p class="text-sm text-gray-600">By ${nft.artist}</p>
      <p class="text-lg font-bold mt-2">${nft.price} ETH</p>
      <button class="bg-blue-500 text-white px-4 py-2 rounded mt-4 w-full hover:bg-blue-600">Buy Now</button>
    `;
    nftContainer.appendChild(nftCard);
  });
}


function filterAndSortNFTs() {
  const searchTerm = document.getElementById('search-input').value.toLowerCase();
  const sortCriteria = document.getElementById('sort-select').value;
  const filterCategory = document.getElementById('filter-select').value;

  let filteredNFTs = nfts.filter(nft => 
    (nft.name.toLowerCase().includes(searchTerm) || 
     nft.artist.toLowerCase().includes(searchTerm)) &&
    (filterCategory === 'all' || nft.category === filterCategory)
  );

  // Sort NFTs
  switch(sortCriteria) {
    case 'price-low':
      filteredNFTs.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filteredNFTs.sort((a, b) => b.price - a.price);
      break;
    case 'name':
      filteredNFTs.sort((a, b) => a.name.localeCompare(b.name));
      break;
  }

  renderNFTs(filteredNFTs);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  renderNFTs(nfts);
  
  // Add event listeners
  document.getElementById('search-input').addEventListener('input', filterAndSortNFTs);
  document.getElementById('sort-select').addEventListener('change', filterAndSortNFTs);
  document.getElementById('filter-select').addEventListener('change', filterAndSortNFTs);
});