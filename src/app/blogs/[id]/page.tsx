// import Container from "@/components/container";
// import { IgetArticle } from '../page';
// interface IArticleProps{
// params:Promise<{id:string}>,
//   searchParams:Promise<{}>;
// }

//   async function Articles(props:IArticleProps) {
//     const {id}=await props.params;
//     console.log(props);
    
//  const  result=  await  fetch(`http://localhost:8000/articles/${id}`);
// const data =(await result.json()) as IgetArticle;

//   return (
//     <Container><div className="max-w-3xl mx-auto p-8 bg-white shadow-xl rounded-xl mt-10">
//     <p> {data.discription}   </p>
//     <h2> {data.id}  </h2>
//     <h3> {data.title}   </h3>
   
   
//        </div></Container>
     
//   );
// };

// export default Articles;