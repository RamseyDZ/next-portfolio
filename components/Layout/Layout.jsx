


const Layout = (props)=>{
    return(
        // <div className="bg-gray-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        <div className="bg-gray-200 flex flex-wrap -mx-1 lg:-mx-4">
          {props.children}
        </div>
      )
}

export default Layout;