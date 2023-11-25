import React from 'react'

function MapPopop(props) {
    const {MapItemData,setMapPopop } = props
  return (
    <>
     {
        MapItemData && (
            <div id="MapPopop">
            <div className="MapPopop-container">
    
                <div className="Mappopop-mark">
                    <span onClick={()=>((MapItemData && setMapPopop(false)))}>
                      X
                    </span>
                </div>
                <div className="MapPopop-word">
                    <h3>{MapItemData && MapItemData.logo}</h3>
                    {MapItemData.strong && (
                        MapItemData.strong.map((item,id)=>(
                            <p key={id}><strong>{item.text}</strong></p> 
                        ))
                    )}
                    {
                        MapItemData.span && MapItemData.span.map((item,id)=>(
                            <p key={id}>
                                <span>{item.text}</span>
                            </p>
                        ))
                    }
                </div>
            </div>
           </div>
        )
     }
    
    </>
  )
}

export default MapPopop