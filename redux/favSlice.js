import {createSlice} from '@reduxjs/toolkit';

const favSlice = createSlice({
    name: 'fav',
    initialState:{
        itemsList: [],
        showFav: false
    },
    reducers:{
        addFav(state,action){
            const id = action.payload;
            const newFav = action.payload;
            const exist  = state.itemsList.find((item) => item.id === id);
            if(exist == undefined)
            {
                
                state.itemsList.push(
                    {
                        id: newFav.id,
                        title: newFav.title,
                        artist: newFav.artist,
                        image: newFav.image,
                        value: newFav.value,
                        description: newFav.description,
                        star_rating: newFav.star_rating,
                        start_rating_text: newFav.star_rating_text,
                        fav: true
                    }
                );
                //newFav.fav == true;
            }
            state.showFav = true;
            

            
        }
        
    }

});

export const favActions = favSlice.actions;
export default favSlice;