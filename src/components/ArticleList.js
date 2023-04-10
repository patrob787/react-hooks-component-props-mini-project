import React from 'react'
import Article from './Article'

function ArticleList( {posts} ) {
  
   let articleArray = posts.map((post) => {
    return <Article key={post.id} title={post.title} date={post.date} preview={post.preview} />
   })
  
    return (
    <div>
        <main>
            {articleArray}
        </main>
    </div>
  )
}

export default ArticleList