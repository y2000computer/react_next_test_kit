const Header = () => (


  <nav className="bg-gray-800">
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="relative flex items-center justify-between h-16">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
   
          <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
            <span className="sr-only">Open main menu</span>

            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>

            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex-shrink-0 flex items-center">
            <img className="block lg:hidden h-8 w-auto" src="/img/react_logo.jpg" alt="Workflow" />
            <img className="hidden lg:block h-8 w-auto" src="/img/react_logo.jpg" alt="Workflow" />
          </div>
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
 
              <a href="/"              
                        className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Static Page</a>

              <a href="/article_pre_build"              
                        className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Pre build</a>

              <a href="/article_client_side"              
                        className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Client-side call API</a>

              <a href="/article_server_side"              
                        className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Server-Side call API</a>


            </div>
          </div>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span className="sr-only">View notifications</span>
           
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>

         
          <div className="ml-3 relative">
            <div>
              <button type="button" className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                <span className="sr-only">Open user menu</span>
                <img className="h-8 w-8 rounded-full" src="/img/samlam_photo.jpg" alt="" />
              </button>
            </div>


          </div>
        </div>
      </div>
    </div>

   
    <div className="sm:hidden" id="mobile-menu">
      <div className="px-2 pt-2 pb-3 space-y-1">
    
        <a href="/"              
                   className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Static Page</a>

        <a href="/article_pre_build" 
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Pre build</a>

        <a href="/article_client_side"              
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Client-side call API</a>

        <a href="/article_server_side" 
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Server-Side call API</a>




       </div>
    </div>
  </nav>




  

  );
  
  export default Header;