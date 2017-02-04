import { StyleSheet } from 'react-native';

const width = 350;

export default StyleSheet.create({
  card: {
    alignItems: 'center',
    overflow: 'hidden',
    elevation: 1,
    width: width,
    height: width
  },
  thumbnail: {
    flex: 1,
    padding: 50,
    width: width,
    resizeMode: 'center'
  },
  info: {
    alignItems: 'flex-start',
    width: width,
    padding: 5,
    backgroundColor: 'rgba(245,245,245,0.8)',
    position: 'absolute',
    bottom: 0
  },
  text: {
    fontSize: 14,
    width: width,
    color: '#444'
  },
  button: {
    backgroundColor: '#eee',
    padding: 10,
    height: 45,
    borderRadius:4,
    margin: 5
  }
});
