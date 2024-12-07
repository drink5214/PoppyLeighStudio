import React from 'react';

const Gallery = () => {
  const artworks = [
    { id: 1, title: 'Artwork 1', description: 'Description of artwork 1' },
    { id: 2, title: 'Artwork 2', description: 'Description of artwork 2' },
    { id: 3, title: 'Artwork 3', description: 'Description of artwork 3' },
    { id: 4, title: 'Artwork 4', description: 'Description of artwork 4' },
    { id: 5, title: 'Artwork 5', description: 'Description of artwork 5' },
    { id: 6, title: 'Artwork 6', description: 'Description of artwork 6' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-serif text-center mb-12">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {artworks.map((artwork) => (
          <div key={artwork.id} className="rounded-lg overflow-hidden shadow-lg">
            <div className="h-64 bg-gray-200"></div>
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">{artwork.title}</h3>
              <p className="mt-2 text-sm text-gray-500">{artwork.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;