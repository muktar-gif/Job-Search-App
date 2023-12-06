import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useState, useEffect} from 'react'
import { checkImageURL } from '../../../../utils'
import { images } from '../../../../constants'

import styles from './nearbyjobcard.style'

const NearbyJobCard = ({ job, handleNavigate }) => {
  
  const [imageSource, setImageSource] = useState(images.jobLogoDefault);

  const fetchImage = async () => {
    try {
      const isValidImage = await checkImageURL(job.employer_logo);
      if (isValidImage) {
        setImageSource({ uri: job.employer_logo });
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
      style={styles.container}
      onPress={handleNavigate}
    >
      <TouchableOpacity
        style={styles.logoContainer}
      >
        <Image
          source={imageSource}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text style={styles.jobType}>
          {job.job_employment_type}
        </Text>
      </View>

    </TouchableOpacity>
  )
}

export default NearbyJobCard