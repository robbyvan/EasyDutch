import React, { Component, PropTypes } from 'react';
import { View, Text, Modal, Picker, TouchableOpacity, DatePickerIOS } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ListItem, Button } from 'react-native-elements';
import moment from 'moment';
import Entypo from 'react-native-vector-icons/Entypo';
// Actions
import * as SelectDateActions from '../../actions';
import style, { headerStyle, custom } from './style';

function mapStateToProps(store) {
  return {
    state: store.addOrder,
  };
}

function matchDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(SelectDateActions, dispatch),
  };
}

function padToTwo(str) {
  str = `${str}`;
  if (str.length < 2) {
    str = `0${str}`;
  }
  return str;
}

@connect(mapStateToProps, matchDispatchToProps)
class SelectDate extends Component {
  static propTypes = {
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  renderYearPicker() {
    const years = [];
    const current = moment().year();
    for (let year = current - 5; year <= current; ++year) {
      years.push(year);
    }

    return (
      <Picker
        style={style.yearPicker}
        selectedValue={this.props.state.selectedYear}
        // onValueChange={year => this.props.actions.setSalaryYear(year)}
      >
        {
          years.map(year =>
            (<Picker.Item
              key={`year-${year}`}
              label={`${year}`}
              value={year}
            />))
        }
      </Picker>
    );
  }

  renderMonthPicker() {
    const dict = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const months = [];
    const maxMonth = Number(this.props.state.selectedYear) < moment().year()
      ? 12
      : moment().month() + 1;
    for (let month = 1; month <= maxMonth; ++month) {
      months.push(dict[month]);
    }
    return (
      <Picker
        style={style.monthPicker}
        selectedValue={this.props.state.selectedMonth}
        // onValueChange={month => this.props.actions.setSalaryMonth(month)}
      >
        {
          months.map((month, index) =>
            (<Picker.Item
              key={`${month}`}
              label={`${month}`}
              value={index + 1}
            />))
        }
      </Picker>
    );
  }

  renderDayPicker() {
    const { state } = this.props;
    const days = [];
    console.log(moment(`${state.selectedYear}-${padToTwo(state.selectedMonth)}-01`).endOf('month').format('D'));
    // console.log(`${state.selectedYear}-${padToTwo(state.selectedMonth)}-01`);
    // console.log(moment(`${state.selectedYear}-${padToTwo(state.selectedMonth)}-01`).endOf('month'));
    const maxDay = Number(state.selectedYear) < moment().year()
      ? Number(moment(`${state.selectedYear}-${padToTwo(state.selectedMonth)}-01`).endOf('month').date())
      : moment().date();
    // console.log(maxDay, moment().date(), moment().format('YYYY-MM-DD'));
    for (let day = 1; day <= maxDay; ++day) {
      days.push(day);
    }
    return (
      <Picker
        style={style.monthPicker}
        selectedValue={this.props.state.selectedMonth}
        // onValueChange={month => this.props.actions.setSalaryMonth(month)}
      >
        {
          days.map((day, index) =>
            (<Picker.Item
              key={`${day}`}
              label={`${day}`}
              value={day}
            />))
        }
      </Picker>
    );
  }
  
  render() {
    const { myGroups, state, actions } = this.props;
    return (
      <Modal
        visible={state.showDatePicker}
        transparent
        animationType="slide"
        onRequestClose={() => null}
      >
        
        <View style={style.modalContainer}>
          <View style={style.modalHeader}>
            <TouchableOpacity
              onPress={() => actions.setDatePickerVisible(false)}
              style={style.modalButton}
            >
              <Text style={style.modalButtonText}>Done</Text>
            </TouchableOpacity>
          </View>

          <View style={style.dpContainer}>
            <DatePickerIOS
              mode='date'
              date={state.orderDate}
              minimumDate={moment().startOf('year').toDate()}
              maximumDate={moment().toDate()}
              onDateChange={date => actions.setOrderDate(date)}
              style={{flex: 1}}
            />
          </View>
        </View>
        
      </Modal>
    );
  }
}

export default SelectDate;
