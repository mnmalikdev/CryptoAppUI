import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#1B232A',
  },
  topBarContainer: {
    minHeight: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  avatarImage: {
    marginTop: 10,
    marginLeft: 13,
    height: 40,
    width: 40,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 30,
  },
  iconContainer: {
    marginTop: 7,
    marginBottom: 7,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  actionPane: {
    minHeight: '10%',
    marginVertical: 1,
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
  },
  actionPaneRowOne: {
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },

  actionItemContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  h1: {
    color: '#E0E0E0',
    fontSize: 24,
    fontFamily: '800',
    marginVertical: 25,
    marginHorizontal: 17,
  },
  h3: {
    marginTop: -15,
    color: '#E0E0E0',
    fontSize: 11,
    fontFamily: 'sans-serif-bold',
  },
  lineChartContainer: {
    marginTop: 5,
    marginBottom: 10,

    minHeight: '35%',
    borderRadius: 15,
  },
  TransactionStyles: {},
});

export default styles;
