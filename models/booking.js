//Create Booking Model and export the module

module.exports = (sequelize, DataTypes) => {
    //Create Booking Model
    const Booking = sequelize.define("Booking", {
        // eslint-disable-next-line camelcase
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // eslint-disable-next-line camelcase
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // eslint-disable-next-line camelcase
        pet_amt: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        small: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        med: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        large: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        giant: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        // eslint-disable-next-line camelcase
        is_pup: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        // eslint-disable-next-line camelcase
        long_term: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        // eslint-disable-next-line camelcase
        short_term: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    });

    Booking.associate = function(models) {
        Booking.belongsTo(models.Host, {
            foreignKey: {
                name: "host_id",
                allowNull: false,
            },
        });
    };

    //Return Booking Model
    return Booking;
};
