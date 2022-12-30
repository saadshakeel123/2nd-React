

function Card(props) {
    
    return (
        <>
        
        <div className="card my-3 " style={{width:"15rem",display:"inline-block",marginLeft:"35px",borderRadius:"10px" }} >
            <img src={ props.data.img}  style={{width:"15rem",borderRadius:"10px" }} alt="" />
            <div  className={props.data.card_class}>
                <h5  className={props.data.h5_class} >{props.data.name} </h5>
                <p  className={props.data.p_class} > {props.data.info}</p>
                <a href={props.data.btn}  className={props.data.a_class} target="_blank"> Buy Now!</a>
            </div>
        </div>
        </>
        
       
    )
    }

export default Card;