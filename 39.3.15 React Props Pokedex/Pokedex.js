function Pokedex(props){
    return props.cards.map(pokecard => <Pokecard 
            id={pokecard.id} 
            name={pokecard.name}
            type={pokecard.type}        
            base_experience={pokecard.base_experience}
        />
    );
}