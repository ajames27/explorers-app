import React, { Component } from "react";
import { View, TouchableOpacity, Text, Dimensions, StyleSheet, StatusBar, ImageBackground } from "react-native";
import { oneCostTiles } from "./oneCost";
import { threeCostTiles } from "./threeCost";
import { sixCostTiles } from "./sixCost";

const { height, width } = Dimensions.get("window");

export default class MainScreen extends Component {
    state = {
        oneCostTiles: oneCostTiles,
        threeCostTiles: threeCostTiles,
        sixCostTiles: sixCostTiles,
        oneCardTitle: "",
        oneCardType: "",
        oneCardText: "",
        threeCardTitle: "",
        threeCardType: "",
        threeCardText: "",
        sixCardTitle: "",
        sixCardType: "",
        sixCardText: "",
        showOneCard: false,
        showThreeCard: false,
        showSixCard: false,
    };

    randomTile = type => {
        const { oneCostTiles, threeCostTiles, sixCostTiles } = this.state;
        let randomOneTile = "";
        let randomThreeTile = "";
        let randomSixTile = "";
        switch (type) {
            case "one": {
                if (this.state.showOneCard) {
                    this.setState({
                        showOneCard: false,
                        oneCardTitle: "",
                        oneCardType: "",
                        oneCardText: "",
                    });
                } else {
                    randomOneTile = oneCostTiles.tiles[Math.floor(Math.random() * oneCostTiles.tiles.length)];
                    this.setState({
                        showOneCard: true,
                        showThreeCard: false,
                        showSixCard: false,
                        oneCardTitle: randomOneTile.title,
                        oneCardType: randomOneTile.type,
                        oneCardText: randomOneTile.text,
                    });
                }
                break;
            }
            case "three": {
                if (this.state.showThreeCard) {
                    this.setState({
                        showThreeCard: false,
                        threeCardTitle: "",
                        threeCardType: "",
                        threeCardText: "",
                    });
                } else {
                    randomThreeTile = threeCostTiles.tiles[Math.floor(Math.random() * threeCostTiles.tiles.length)];
                    this.setState({
                        showOneCard: false,
                        showThreeCard: true,
                        showSixCard: false,
                        threeCardTitle: randomThreeTile.title,
                        threeCardType: randomThreeTile.type,
                        threeCardText: randomThreeTile.text,
                    });
                }
                break;
            }
            case "six": {
                if (this.state.showSixCard) {
                    this.setState({
                        showSixCard: false,
                        sixCardTitle: "",
                        sixCardType: "",
                        sixCardText: "",
                    });
                } else {
                    randomSixTile = sixCostTiles.tiles[Math.floor(Math.random() * sixCostTiles.tiles.length)];
                    this.setState({
                        showOneCard: false,
                        showThreeCard: false,
                        showSixCard: true,
                        sixCardTitle: randomSixTile.title,
                        sixCardType: randomSixTile.type,
                        sixCardText: randomSixTile.text,
                    });
                }
                break;
            }
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} />
                {this.state.showOneCard ? (
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => this.randomTile("one")}
                        style={[styles.button, { backgroundColor: "#E4D2A8" }]}
                    >
                        <Text style={styles.tileTitle}>{this.state.oneCardTitle}</Text>
                        <Text style={styles.tileType}>{this.state.oneCardType}</Text>
                        <View style={styles.separator} />
                        <Text style={styles.tileText}>{this.state.oneCardText}</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => this.randomTile("one")}
                        style={[styles.button, { backgroundColor: "#68D9DA" }]}
                    >
                        <View style={styles.backgroundCircle}>
                            <Text style={styles.buttonText}>1</Text>
                        </View>
                    </TouchableOpacity>
                )}
                {this.state.showThreeCard ? (
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => this.randomTile("three")}
                        style={[styles.button, { backgroundColor: "#E4D2A8" }]}
                    >
                        <Text style={styles.tileTitle}>{this.state.threeCardTitle}</Text>
                        <Text style={styles.tileType}>{this.state.threeCardType}</Text>
                        <View style={styles.separator} />
                        <Text style={styles.tileText}>{this.state.threeCardText}</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => this.randomTile("three")}
                        style={[styles.button, { backgroundColor: "#E5E1C2" }]}
                    >
                        <View style={styles.backgroundCircle}>
                            <Text style={styles.buttonText}>3</Text>
                        </View>
                    </TouchableOpacity>
                )}
                {this.state.showSixCard ? (
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => this.randomTile("six")}
                        style={[styles.button, { backgroundColor: "#E4D2A8" }]}
                    >
                        <Text style={styles.tileTitle}>{this.state.sixCardTitle}</Text>
                        <Text style={styles.tileType}>{this.state.sixCardType}</Text>
                        <View style={styles.separator} />
                        <Text style={styles.tileText}>{this.state.sixCardText}</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => this.randomTile("six")}
                        style={[styles.button, { backgroundColor: "#569640" }]}
                    >
                        <View style={styles.backgroundCircle}>
                            <Text style={[styles.buttonText, { marginLeft: -4 }]}>6</Text>
                        </View>
                    </TouchableOpacity>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#444",
    },
    button: {
        backgroundColor: "#ddd",
        height: height / 3 - 30,
        width: width - 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        shadowOffset: { width: -2, height: 5 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 15,
    },
    buttonText: {
        fontSize: 75,
        fontFamily: "BaskervilleFreeBold",
    },
    backgroundCircle: {
        backgroundColor: "#EFE7E8",
        borderRadius: 55,
        height: 110,
        width: 110,
        alignItems: "center",
        justifyContent: "center",
        shadowOffset: { width: -2, height: 5 },
        shadowOpacity: 1,
        shadowRadius: StyleSheet.hairlineWidth,
        elevation: 10,
    },
    tileTitle: {
        marginTop: 5,
        fontSize: 28,
        fontFamily: "BaskervilleFreeBold",
        color: "#743",
        textAlign: "center",
        marginLeft: 10,
        marginRight: 10,
    },
    tileType: {
        fontSize: 20,
        fontFamily: "BaskervilleFree",
        fontWeight: "400",
        color: "#854",
    },
    tileText: {
        fontSize: 15,
        fontFamily: "BaskervilleFree",
        margin: 15,
        color: "#854",
    },
    separator: {
        backgroundColor: "#a76",
        width: 150,
        height: 1,
        margin: 5,
    },
    buttonImage: {
        height: height / 3 - 30,
        width: width - 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        overflow: "hidden",
    },
});
