import Script from 'next/script';

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Anant Aggarwal",
    "jobTitle": "AI Engineer",
    "description": "AI Engineer at GPT Integrators, MS Data Science student at University of Pennsylvania, and published researcher with 7+ papers in machine learning and medical AI.",
    "url": "https://anant.upenn.domains",
    "image": "https://anant.upenn.domains/assets/images/main_photo.jpg",
    "email": "anant241203@gmail.com",
    "telephone": "+1-445-310-0291",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Philadelphia",
      "addressRegion": "Pennsylvania",
      "addressCountry": "US"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "University of Pennsylvania",
      "url": "https://www.upenn.edu"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "GPT Integrators",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Atlanta",
        "addressRegion": "Georgia",
        "addressCountry": "US"
      }
    },
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "Data Science",
      "Medical AI",
      "TensorFlow",
      "PyTorch",
      "React",
      "Node.js",
      "Python",
      "Full Stack Development"
    ],
    "sameAs": [
      "https://linkedin.com/in/anant241203",
      "https://github.com/ANANT241203"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Master of Science in Data Science",
        "educationalLevel": "Graduate",
        "credentialCategory": "degree",
        "recognizedBy": {
          "@type": "EducationalOrganization",
          "name": "University of Pennsylvania"
        }
      }
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "AI Engineer",
      "occupationLocation": {
        "@type": "City",
        "name": "Atlanta, Georgia"
      },
      "skills": [
        "Artificial Intelligence",
        "Machine Learning",
        "Deep Learning",
        "Data Science",
        "Full Stack Development",
        "Research"
      ]
    }
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
