const Categories = ({categories, filterItems}) => {
  return (
    <div className="btn-container">
        {categories.map((x, i) => {
            return (
                <button key={i} onClick={() => filterItems(x)} className="filter-btn">
                    {x}
                </button>
            )
        })}
    </div>
  )
}

export default Categories