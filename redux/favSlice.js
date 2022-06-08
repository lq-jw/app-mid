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

            const exist  = state.itemsList.find((item) => item.id === newFav.id);
            if(exist)
            {
                exist.q++;
                exist.fav = false;
                state.itemsList = state.itemsList.filter(item => item.id !== newFav.id);
                
                
            }else {
                state.itemsList.push(
                    {
                        id: newFav.id,
                        title: newFav.title,
                        authors: newFav.authors,
                        image_url: newFav.image_url,
                        num_pages: newFav.num_pages,
                        description: newFav.description,
                        rating: newFav.rating,
                        //start_rating_text: newFav.star_rating_text,
                        fav: true,
                        q: 1
                    }
                );
                
            }
            state.showFav = true;
            

            
        }
        
    }

});

export const favActions = favSlice.actions;
export default favSlice;

