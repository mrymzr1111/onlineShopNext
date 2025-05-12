
// import Articles from '@/components/Articles';
// import Container from '@/components/container';
// import Link from 'next/link';

// import React from 'react';

// export interface IgetArticle {
//   id: number;
//   title: string;
//   discription : string;
// }

// // If you're using Next.js App Router (pages/app), this async component is OK
// async function Blogs() {
//   // Fetch data from the API
//   const result = await fetch("http://localhost:8000/articles");
//   const data = (await result.json()) as IgetArticle[];
// console.log(data);

//   return (
//     <Container>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-16">
//         {/* Map through the data and pass the article props to the Articles component */}
//         {data.map((article) => (
//          <Link href={`/blogs/${article.id}`}  key={article.id}>
        

//   <Articles id={article.id} title={article.title} discription={article.discription}  />
//       </Link> 
//         ))}
//       </div>
//     </Container>
//   );
// }

// export default Blogs;

