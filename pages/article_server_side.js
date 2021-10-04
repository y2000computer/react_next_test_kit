import Head from 'next/head'
import Layout from "../components/Layout";



export const getServerSideProps = async () => {
  const res = await fetch(process.env.API_URL + '/api_article');
  const data = await res.json();

  //console.log('API_URL ='+ process.env.API_URL);

  return {
    props: { ninjas: data}
  }
}

const Ninjas = ({ ninjas }) => {
  return(

    <div className="flex flex-col min-h-screen bg-gray-100">
    <Layout>
    
    <main className="flex-grow">

      <div className="p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">


      {
        ninjas.map(ninja => (
  
          <div key={ninja.article_id} className="rounded overflow-hidden shadow-lg">
              <img className="w-full" src={ninja.imgs} alt="Mountain" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{ninja.headline}</div>
                <p className="text-gray-700 text-base">{ninja.content}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
              </div>
            </div>
            ))

      }     

      </div>

    </main>

 
    </Layout>
  
    </div>

    
  )
}

export default Ninjas;