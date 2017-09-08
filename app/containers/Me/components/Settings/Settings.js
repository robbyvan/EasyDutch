import React, { Component, PropTypes } from 'react';
import { View, Text, AsyncStorage, Alert, TouchableOpacity } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Actions
import * as MeActions from '../../actions';
import * as LoginActions from '../../../Login/actions';
import style, { headerStyle, custom } from './style';

function mapStateToProps(store) {
  return {
    state: store.app,
  };
}

function matchDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...MeActions, ...LoginActions }, dispatch),
  };
}

@connect(mapStateToProps, matchDispatchToProps)
class Settings extends Component {
  static propTypes = {
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  static navigationOptions = () => ({ ...headerStyle });

  render() {
    return(
      <View>
        <List>
          <ListItem
            onPress={() => null}
            title='Account'
          />
        </List>
        <List>
          <ListItem
            onPress={() => null}
            title='Notifications'
          />
          <ListItem
            onPress={() => null}
            title='General'
          />
        </List>
        <List>
          <ListItem
            onPress={() => null}
            title='About'
          />
          <ListItem
            onPress={() => null}
            title='Contact'
          />
        </List>
        <List>
          <ListItem
            title={
              <TouchableOpacity
                style={{height: 30, justifyContent: 'center'}}
                onPress={() => this.props.actions.logout()}
              >
                <Text style={{textAlign: 'center', fontSize: 20, color: '#be7358', fontWeight: '300'}}>Sign Out</Text>
              </TouchableOpacity>
            }
            hideChevron
          />
        </List>
      </View>
    );
  }
}

export default Settings;