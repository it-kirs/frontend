function Hero (props) {
    return(
        <div className="hero-card">
         <img src={props.foto} alt="img"/>
         <div className="hero-name">{props.heroname}</div>
         <div className="hero-universe"><span>Вселенная:</span> {props.universe}</div>   
         <div className="hero-alterego"><span>Альтер эго:</span> {props.alterego}</div> 
         <div className="hero-occupation"><span>Род деятельности:</span>{props.occupation}</div> 
         <div className="hero-friends"><span>Друзья:</span>{props.friends}</div>
         <div className="hero-superpower"><span>Суперспособности:</span> {props.superpower}</div> 
         <div className="hero-description"><span>Описание:</span>{props.description}</div>   
        </div>
    );
}
export default Hero;