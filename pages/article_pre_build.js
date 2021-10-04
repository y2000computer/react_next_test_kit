import Head from 'next/head'
import Layout from "../components/Layout";


export const getStaticProps = async () => {
  const res = await fetch('https://ims-uat.y2kcomputer.com/article/en-US/api_article');
  const data = await res.json();
  return {
    props: { ninjas: data}
  }
}

const Ninjas = ({ ninjas }) => {
  return(

    <div class="flex flex-col min-h-screen bg-gray-100">
    <Layout>
    
    <main class="flex-grow">


        <div class="rounded overflow-hidden shadow-lg">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">All Articles</div>
              {
                ninjas.map(ninja => (
                  <div key={ninja.article_id}>
                    <a> 
                     { ninja.article_id }<br/>
                     { ninja.article_date }<br/>
                     { ninja.headline }<br/>
                     { ninja.content }<br/>
                     { ninja.imgs }<br/>
                     <br/><br/>
                    </a>
                    </div>
                ))
              }
          </div>
        </div>
  
    </main>


    </Layout>
  
    </div>

    
  )
}

export default Ninjas;