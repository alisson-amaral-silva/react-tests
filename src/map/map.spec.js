import {expect} from 'chai'
import map from './map'

it('map() should be a function)', () => {
    expect(map).to.be.a('function')
})

it('map[1,2] should return [1,2]', () => {
    expect(map([1,2], (item) => item)).to.be.deep.equal([2, 3])
})

it('map should throw an error with message "Cannot read property map of undefine" ', () => {
    expect(map).to.throw(TypeError, "Cannot read property 'map' of undefine")
})
