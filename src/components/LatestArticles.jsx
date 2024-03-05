import {useState} from 'react'
import {NavLink, useParams} from 'react-router-dom'
// Il faut passer une props ici qui va prendure le tableau des articles
const LatestArticles = ({arrayArticles}) => {
  

    return (
            <>
            {/* Il faut mapper le tableau pour afficher la card des articles */}
            {arrayArticles.map((article, index) => ( 
           
  
            <div key={index} className="transition duration-500 ease-in-out transform hover:scale-105 relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full hover:shadow-2xl">
              <div
                className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <span className="absolute top-0 right-0 bg-[#E11D48] text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
              {article.category}
            </span>
                {/* Ici on va mettre l'image de l'article qui vient du tableau du coup */}  
                <img
                  src={article.imageUrl} 
                  alt="Article"
                  className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h5 className="block mb-2 text-xl font-semibold leading-snug tracking-normal text-blue-gray-900">
                  {"Pourquoi Mohamed est l'enfant prodige?"}{/*  On va afficher le titre de l'article ici  */} {article.title}
                </h5>
                <p className="block text-base font-light leading-relaxed text-inherit">
                   {"Grâce à sa persévrance accrue...."} {/*On va afficher le summary de chaque article */} 
                   {article.summary}
                </p>
                <p className="text-sm text-gray-600 mt-4">
                 ⏳  Temps de lecture:  {Math.ceil(a.content.length / 300)} min(s) 
                </p>
              </div>
              <div className="flex justify-between items-center p-6 pt-0">
                <div className="flex items-center">
                  {/* Vous affichez l'image de l'auteur et le nom en alt */}
                  
                  <img src={article.authorImageUrl} alt={article.author} className="w-10 h-10 rounded-full mr-2" />
                  <span className="text-sm font-semibold text-gray-900">{article.author}</span>
                </div>
                {/* Vous affichez la date de l'article  au bon format */} 
                <span className="text-sm text-gray-600">{new Date(article.date).toLocaleDateString()}</span>  
              </div>
              <div className="p-6 pt-0">
                {/* Vous redirigez l'utilisateur vers la page dynamique !  */}
                <NavLink to={`/article/${article.id}`}
                  className="inline-block py-3 px-6 rounded-lg bg-[#E11D48] text-white font-bold text-xs uppercase transition-all hover:shadow-lg active:opacity-[0.85]}"
                  >
                  Lire Plus
                </NavLink>
              </div>
            </div>
        
        
         ))}
          </>
      );
};

export default LatestArticles;