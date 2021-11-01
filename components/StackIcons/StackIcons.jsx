
function StackIcons(props) {
    const array = props.data;
    
    // Here i am showing icons and styling them by the item value (passed as className)
    // when i have time i should change it to show icons in place of
    const icons = array.map((item) => {
      return (
        <div key={item} className="icon">
          <span className={item}><span/></span>
        </div>
      );
    });
    return(
      <div> {icons} </div>
    )
  }

export default StackIcons;