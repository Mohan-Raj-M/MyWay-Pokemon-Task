import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  BackHandler,
  StyleSheet,
} from 'react-native';
import {FONTS, COLORS_LIGHT} from '../Constants';
import {connect} from 'react-redux';
import ShadowView from 'react-native-simple-shadow-view';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

import {PokemonInfo, PokemonAction} from './action';
import {Actions} from 'react-native-router-flux';

// import console = require('console');

const width = Dimensions.get('window').width;

class Home extends Component {
  state = {
    status: false,
  };
  componentDidMount() {
    this.props.PokemonAction();
    changeNavigationBarColor(this.props.COLORS.LIGHT);

    BackHandler.addEventListener('hardwareBackPress', () => {
      this.setState({status: false});
    });
  }

  renderHeader() {
    const {COLORS} = this.props;
    return (
      <ShadowView
        style={{
          paddingHorizontal: 24,
          paddingVertical: 14,
          margin: 10,
          shadowColor: COLORS.SHADOW_ALT,
          shadowOpacity: 0.25,
          shadowRadius: 15,
          borderRadius: 10,
          shadowOffset: {width: 0, height: 20},
          backgroundColor: COLORS.LIGHT_HEADER,
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <View>
          <Text
            style={{
              fontFamily: FONTS.RALEWAY_LIGHT,
              color: COLORS.DARK,
              fontSize: 34,
            }}>
            Pokemon
          </Text>
          <Text
            style={{
              fontFamily: FONTS.RALEWAY_BOLD,
              color: COLORS.LIGHT_BLUE,
              fontSize: 12.4,
            }}
          />
        </View>
      </ShadowView>
    );
  }

  render() {
    const {COLORS} = this.props;
    return (
      <View style={{flex: 1, backgroundColor: '#f6f6f6'}}>
        <ScrollView>
          <StatusBar
            barStyle={COLORS.BAR_STYLE}
            backgroundColor={COLORS.LIGHT}
          />
          {changeNavigationBarColor(COLORS.LIGHT)}
          {this.renderHeader()}
          {this.state.status != true && this.props.pokemonInfo != null ? (
            <View
              style={{
                flexWrap: 'wrap',
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              {this.props.pokemon.map((item, key) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({status: true});
                      this.props.PokemonInfo(item.name);
                    }}>
                    <View
                      style={{
                        width: 140,
                        height: 130,
                        backgroundColor: 'white',
                        marginHorizontal: 5,
                        marginVertical: 15,
                        elevation: 7,
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          alignSelf: 'center',
                          fontWeight: 'bold',
                          fontSize: 19,
                        }}>
                        {item.name}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          ) : (
            <View
              style={{
                flex: 1,
              }}>
              <View style={styles.viewDetail}>
                <Text style={styles.leftTxt}>Name :</Text>
                <Text style={styles.rightTxt}>
                  {this.props.pokemonInfo.forms[0].name}
                </Text>
              </View>
              <View style={styles.viewDetail}>
                <Text style={styles.leftTxt}>Height :</Text>
                <Text style={styles.rightTxt}>
                  {this.props.pokemonInfo.height}
                </Text>
              </View>
              <View style={styles.viewDetail}>
                <Text style={styles.leftTxt}>Weight :</Text>
                <Text style={styles.rightTxt}>
                  {this.props.pokemonInfo.weight}
                </Text>
              </View>
              <View style={styles.viewDetail}>
                <Text style={styles.leftTxt}>Abiities :</Text>
                <Text style={styles.rightTxt}>
                  {this.props.pokemonInfo.abilities[0].ability.name}
                </Text>
              </View>
              <View style={styles.viewDetail}>
                <Text style={styles.leftTxt}>Moves :</Text>
                <Text style={styles.rightTxt}>
                  {' '}
                  {this.props.pokemonInfo.moves[0].move.name}
                </Text>
              </View>
              <View style={styles.viewDetail}>
                <Text style={styles.leftTxt}>Types :</Text>
                <Text style={styles.rightTxt}>
                  {this.props.pokemonInfo.types[0].type.name}
                </Text>
              </View>
              <View style={styles.viewDetail}>
                <Text style={styles.leftTxt}>Stats :</Text>
              </View>
              <View style={[styles.viewDetail, {marginLeft: 30}]}>
                <Text style={styles.leftTxt}>Stat Name :</Text>
                <Text style={styles.rightTxt}>
                  {' '}
                  {this.props.pokemonInfo.stats[0].stat.name}
                </Text>
              </View>
              <View style={[styles.viewDetail, {marginLeft: 30}]}>
                <Text style={styles.leftTxt}>Base Stat :</Text>
                <Text style={styles.rightTxt}>
                  {this.props.pokemonInfo.stats[0].base_stat}
                </Text>
              </View>
              <View style={[styles.viewDetail, {marginLeft: 30}]}>
                <Text style={styles.leftTxt}>Effort :</Text>
                <Text style={styles.rightTxt}>
                  {this.props.pokemonInfo.stats[0].effort}
                </Text>
              </View>
            </View>
          )}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    COLORS: state.home.COLORS,
    loading: state.home.loading,
    pokemon: state.home.pokemon,
    pokemonInfo: state.home.pokemonInfo,
  };
};

export default connect(
  mapStateToProps,
  {PokemonAction, PokemonInfo},
)(Home);

const styles = StyleSheet.create({
  viewDetail: {
    flexDirection: 'row',
    marginLeft: 20,
    marginVertical: 10,
  },
  leftTxt: {
    fontSize: 19,
    marginTop: 10,
    marginHorizontal: 5,
    fontWeight: 'bold',
  },
  rightTxt: {fontSize: 19, marginTop: 10, marginHorizontal: 5},
});
