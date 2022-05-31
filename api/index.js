import axios from "axios";

export const getBooksAPI = async () => {
   try {
      return await axios.get('https://example-data.draftbit.com/books?_limit=20');
   } catch (e) {
      return {data : 'network error !!'}
   }
}