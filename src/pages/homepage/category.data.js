import healthIcon from "../../assets/icons/doctor.png";
import politicsIcon from "../../assets/icons/candidates.png";
import economyIcon from "../../assets/icons/euro.png";
import profileImage from "../../assets/images/profile_image.jpg";

export default [
  {
    name: "General Health",
    posts: [
      {
        id: 1,
        author: {
          image: healthIcon,
          username: "verem"
        },
        body: `My eyes are sensitive to light but they are especially sensitive at
        night even when I’m at home? It’s really hard for my eyes to focus on
				anything and I don’t know why because I wear glasses. Why …`,
        title: `Eyes can't focus`,
        createdAt: new Date().toLocaleDateString(),
        replies: [
          {
            id: 1,
            author: {
              name: "Adaora Kenis",
              designation: "Optician",
              image: profileImage
            },
            text: `Hi!
							This could be due to infection or other causes. 
							I would likely need more detail to advise you properly. 
							Please feel free to schedule a virtual visit with me to discuss.`
          },
          {
            id: 1,
            author: {
              name: "Adaora Kenis",
              designation: "Optician",
              image: profileImage
            },
            text: `Hi!
							This could be due to infection or other causes. 
							I would likely need more detail to advise you properly. 
							Please feel free to schedule a virtual visit with me to discuss.`
          }
        ]
      },
      {
        id: 2,
        author: {
          image: healthIcon,
          username: "Kenis"
        },
        body: `My eyes are sensitive to light but they are especially sensitive at
        night even when I’m at home? It’s really hard for my eyes to focus on
				anything and I don’t know why because I wear glasses. Why …`,
        title: `Eyes can't focus`,
        createdAt: new Date().toLocaleDateString(),
        replies: [
          {
            id: 1,
            author: {
              name: "Adaora Kenis",
              designation: "Optician",
              image: profileImage
            },
            text: `Hi!
							This could be due to infection or other causes. 
							I would likely need more detail to advise you properly. 
							Please feel free to schedule a virtual visit with me to discuss.`
          }
        ]
      },
      {
        id: 3,
        author: {
          image: healthIcon,
          username: "David"
        },
        body: `My eyes are sensitive to light but they are especially sensitive at
        night even when I’m at home? It’s really hard for my eyes to focus on
				anything and I don’t know why because I wear glasses. Why …`,
        title: `Eyes can't focus`,
        createdAt: new Date().toLocaleDateString(),
        replies: [
          {
            id: 1,
            author: {
              name: "David Oblorn",
              designation: "Optician",
              image: profileImage
            },
            text: `Hi!
							This could be due to infection or other causes. 
							I would likely need more detail to advise you properly. 
							Please feel free to schedule a virtual visit with me to discuss.`
          }
        ]
      },
      {
        id: 4,
        author: {
          image: healthIcon,
          username: "Ken"
        },
        body: `My eyes are sensitive to light but they are especially sensitive at
        night even when I’m at home? It’s really hard for my eyes to focus on
				anything and I don’t know why because I wear glasses. Why …`,
        title: `Eyes can't focus`,
        createdAt: new Date().toLocaleDateString(),
        replies: [
          {
            id: 1,
            author: {
              name: "Ken Kon",
              designation: "Optician",
              image: profileImage
            },
            text: `Hi!
							This could be due to infection or other causes. 
							I would likely need more detail to advise you properly. 
							Please feel free to schedule a virtual visit with me to discuss.`
          }
        ]
      }
    ],
    icon: healthIcon
  },
  {
    name: "Politics",
    icon: politicsIcon,
    posts: [
      {
        id: 5,
        author: { image: healthIcon, username: "Dan" },
        body: `My eyes are sensitive to light but they are especially sensitive at
        night even when I’m at home? It’s really hard for my eyes to focus on
				anything and I don’t know why because I wear glasses. Why …`,
        title: `Eyes can't focus`,
        createdAt: new Date().toLocaleDateString(),
        replies: [
          {
            id: 1,
            author: {
              name: "Dan Hitchins",
              designation: "Optician",
              image: profileImage
            },
            text: `Hi!
							This could be due to infection or other causes. 
							I would likely need more detail to advise you properly. 
							Please feel free to schedule a virtual visit with me to discuss.`
          }
        ]
      },
      {
        id: 6,
        author: { image: healthIcon, username: "Mnena" },
        body: `My eyes are sensitive to light but they are especially sensitive at
        night even when I’m at home? It’s really hard for my eyes to focus on
				anything and I don’t know why because I wear glasses. Why …`,
        title: `Eyes can't focus`,
        createdAt: new Date().toLocaleDateString(),
        replies: [
          {
            id: 1,
            author: {
              name: "Mnena Merna",
              designation: "Optician",
              image: profileImage
            },
            text: `Hi!
							This could be due to infection or other causes. 
							I would likely need more detail to advise you properly. 
							Please feel free to schedule a virtual visit with me to discuss.`
          }
        ]
      },
      {
        id: 7,
        author: { image: healthIcon, username: "Mercy" },
        body: `My eyes are sensitive to light but they are especially sensitive at
        night even when I’m at home? It’s really hard for my eyes to focus on
				anything and I don’t know why because I wear glasses. Why …`,
        title: `Eyes can't focus`,
        createdAt: new Date().toLocaleDateString(),
        replies: [
          {
            id: 1,
            author: {
              name: "Mercy Kent",
              designation: "Optician",
              image: profileImage
            },
            text: `Hi!
							This could be due to infection or other causes. 
							I would likely need more detail to advise you properly. 
							Please feel free to schedule a virtual visit with me to discuss.`
          }
        ]
      },
      {
        id: 8,
        author: { image: healthIcon, username: "Nguamo" },
        body: `My eyes are sensitive to light but they are especially sensitive at
        night even when I’m at home? It’s really hard for my eyes to focus on
				anything and I don’t know why because I wear glasses. Why …`,
        title: `Eyes can't focus`,
        createdAt: new Date().toLocaleDateString(),
        replies: [
          {
            id: 1,
            author: {
              name: "Nguamo Kent",
              designation: "Optician",
              image: profileImage
            },
            text: `Hi!
							This could be due to infection or other causes. 
							I would likely need more detail to advise you properly. 
							Please feel free to schedule a virtual visit with me to discuss.`
          }
        ]
      }
    ]
  },
  {
    name: "Economy",
    icon: economyIcon,
    posts: [
      {
        id: 9,
        author: { image: healthIcon, username: "Debby" },
        body: `My eyes are sensitive to light but they are especially sensitive at
        night even when I’m at home? It’s really hard for my eyes to focus on
				anything and I don’t know why because I wear glasses. Why …`,
        title: `Eyes can't focus`,
        createdAt: new Date().toLocaleDateString(),
        replies: [
          {
            id: 1,
            author: {
              name: "Debby Curtis",
              designation: "Optician",
              image: profileImage
            },
            text: `Hi!
							This could be due to infection or other causes. 
							I would likely need more detail to advise you properly. 
							Please feel free to schedule a virtual visit with me to discuss.`
          }
        ]
      },
      {
        id: 10,
        author: { image: healthIcon, username: "Alex" },
        body: `My eyes are sensitive to light but they are especially sensitive at
        night even when I’m at home? It’s really hard for my eyes to focus on
				anything and I don’t know why because I wear glasses. Why …`,
        title: `Eyes can't focus`,
        createdAt: new Date().toLocaleDateString(),
        replies: [
          {
            id: 1,
            author: {
              name: "Alex Borris",
              designation: "Optician",
              image: profileImage
            },
            text: `Hi!
							This could be due to infection or other causes. 
							I would likely need more detail to advise you properly. 
							Please feel free to schedule a virtual visit with me to discuss.`
          }
        ]
      },
      {
        id: 11,
        author: { image: healthIcon, username: "Bendozy" },
        body: `My eyes are sensitive to light but they are especially sensitive at
        night even when I’m at home? It’s really hard for my eyes to focus on
				anything and I don’t know why because I wear glasses. Why …`,
        title: `Eyes can't focus`,
        createdAt: new Date().toLocaleDateString(),
        replies: [
          {
            id: 1,
            author: {
              name: "Bendozy Kerry",
              designation: "Optician",
              image: profileImage
            },
            text: `Hi!
							This could be due to infection or other causes. 
							I would likely need more detail to advise you properly. 
							Please feel free to schedule a virtual visit with me to discuss.`
          }
        ]
      },
      {
        id: 12,
        author: { image: healthIcon, username: "DaraTobi" },
        body: `My eyes are sensitive to light but they are especially sensitive at
        night even when I’m at home? It’s really hard for my eyes to focus on
				anything and I don’t know why because I wear glasses. Why …`,
        title: `Eyes can't focus`,
        createdAt: new Date().toLocaleDateString(),
        replies: [
          {
            id: 1,
            author: {
              name: "DaraTobi Gibbs",
              designation: "Optician",
              image: profileImage
            },
            text: `Hi!
							This could be due to infection or other causes. 
							I would likely need more detail to advise you properly. 
							Please feel free to schedule a virtual visit with me to discuss.`
          }
        ]
      }
    ]
  }
];
