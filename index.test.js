const {sequelize} = require('./db')
const {Restaurant, Menu} = require('./models/index')
const {
    seedRestaurant,
    seedMenu,
  } = require('./seedData');

describe('Restaurant and Menu Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    });

    test('can create a Restaurant', async () => {
        // TODO - write test
        const testRestaurant = await Restaurant.create({name: "Chez Restaurant", location: "West End", cuisine: "French"})
        expect(testRestaurant.name).toBe("Chez Restaurant");
        expect(testRestaurant.location).toBe('West End');
        expect(testRestaurant.cuisine).toBe("French");
    });

    test('can create a Menu', async () => {
        // TODO - write test
        const testMenu = await Menu.create({title: "Mains"})
        expect(testMenu.title).toBe("Mains");
    });

    test('can find Restaurants', async () => {
        // TODO - write test
        const findRestaurants = await Restaurant.findAll({
            attributes: {
                include: [
                    [sequelize.fn('COUNT', sequelize.col('name')), 'n_name']
                ]
            }
        })
        expect(findRestaurants).toEqual(Restaurant.length)
    });

    test('can find Menus', async () => {
        // TODO - write test
        const findMenus = await Menu.findAll({
            attributes: {
                include: [
                    [sequelize.fn('COUNT', sequelize.col('title')), 'n_title']
                ]
            }
        })
        expect(findMenus).toEqual(seedMenu.length)
    });

    test('can delete Restaurants', async () => {
        // TODO - write test
        expect('NO TEST').toEqual('EXPECTED DATA')
    });
})