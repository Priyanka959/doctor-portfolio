export type GalleryCategory = 'all' | 'clinic' | 'team' | 'treatments'

export const galleryItems = [
  { id: '1', src: '/images/gallery/clinic-interior.jpg',  caption: 'Skin Code Clinic Interior – Mangaluru',    category: 'clinic'      as GalleryCategory },
  { id: '2', src: '/images/gallery/consultation.jpg',     caption: 'Dr. Snigdha Hegde during consultation',    category: 'team'        as GalleryCategory },
  { id: '3', src: '/images/gallery/laser-treatment.jpg',  caption: 'Laser treatment procedure at Skin Code',   category: 'treatments'  as GalleryCategory },
  { id: '4', src: '/images/gallery/prp-hair.jpg',         caption: 'PRP Hair Restoration at Skin Code',        category: 'treatments'  as GalleryCategory },
]
