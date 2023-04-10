import React from 'react'

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