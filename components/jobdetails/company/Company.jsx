import { View, Text, Image } from 'react-native'
import { useEffect, useState } from 'react'

import styles from './company.style'
import { icons, images } from '../../../constants'
import { checkImageURL } from '../../../utils'

const Company = ({ companyLogo, jobTitle, companyName, location }) => {

  const [imageSource, setImageSource] = useState(images.jobLogoDefault);

  const fetchImage = async () => {
    try {
      const isValidImage = await checkImageURL(companyLogo);
      if (isValidImage) {
        setImageSource({ uri: companyLogo });
      }
    } catch (error) {
      setImageSource(images.jobLogoDefault);
    }
  };

  useEffect(() => {
    fetchImage();
  }, []);
    
  return (
    <View style={styles.container}>

      <View style={styles.logoBox}>
        <Image 
          source={imageSource}
          style={styles.logoImage}
        />
      </View>
      
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>

      <View style={styles.companyInfoBox}>
        <Text style={styles.companyInfoBox}>{companyName} / </Text>
        <View style={styles.locationBox}>
          <Image
            source={icons.location}
            resizeMode="contain"
            style={styles.locationImage}
          />
          <Text style={styles.locationName}>{location}</Text>
        </View>
      </View>
      
    </View>
  )
}

export default Company