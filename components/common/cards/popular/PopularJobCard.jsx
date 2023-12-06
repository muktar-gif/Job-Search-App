import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useState, useEffect, PureComponent} from 'react'
import { checkImageURL } from '../../../../utils'
import { images } from '../../../../constants'

import styles from './popularjobcard.style'

const PopularJobCard = ({ item, selectedJob, handlePressCard }) => {
  
  const [imageSource, setImageSource] = useState(images.jobLogoDefault);

  const fetchImage = async () => {
    try {
      const isValidImage = await checkImageURL(item.employer_logo);
      if (isValidImage) {
        setImageSource({ uri: item.employer_logo });
      }
    } catch (error) {
      setImageSource(images.jobLogoDefault);
    }
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (

    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handlePressCard(item)}
    >
      <TouchableOpacity
        style={styles.logoContainer(selectedJob, item)}
      >
        <Image
          source={imageSource}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>{item.employer_name}</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.job_title}
        </Text>
        <Text style={styles.location}>
          {item.job_country}
        </Text>
      </View>

    </TouchableOpacity>
  )
}

export default PopularJobCard