export const checkImageURL = async (url) => {
    try {
      const res = await fetch(url);
  
      // Check if the response status is OK
      if (!res.ok) {
        throw new Error(`Failed to fetch image. Status: ${res.status}`);
      }
  
      const buff = await res.blob();
  
      // Check if the response is of type 'image/'
      if (buff.type.startsWith('image/')) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  };
  