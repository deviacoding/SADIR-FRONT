import React, {useState} from 'react'

const ListComponent = () => {
    
    const [list, setList] = useState([ 
        {
          id : 1 ,
          coursLePlusImportant: "React"
        },
        {
          id : 2 ,
          coursLePlusImportant: "html/css"
        },
        {
          id : 3 ,
          coursLePlusImportant: "Jquery"
        }
        ])

  return (
    <div>
        <h1>Application List</h1>
        {
            list.map((item)=> (
                <div key={item.id}>
                    le cours le plus import est : {item.coursLePlusImportant}
                </div>
            )
           )
        }

    </div>
  )
}

export default ListComponent