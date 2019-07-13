import {
	describe,
	it,
	beforeEach,
	afterEach,
	expect,
} from './test.helper';

import basicModel from './data/basic.json';
import { modelClasses } from '../src/index.js';


/** @test */
describe("Instantiates model", () => {
	basicModel.nodes.push({"id": 100});
    basicModel.nodes.push({"id": 200});
    basicModel.links.push({"id": 300, "source": 100, "target": 200});

    //console.log("INPUT:", basicModel);
    let graphData = modelClasses.Graph.fromJSON(basicModel, modelClasses);

    console.log(graphData.logger.entries);

    beforeEach(() => {});
	
	it("All input objects are mapped to model resources", () => {
		expect(graphData).has.property("resources");
		expect(graphData.resources).to.have.length.above(0);
        graphData.resources.forEach(e => {
			expect(e).to.be.defined;
            expect(e).has.property('id');
            expect(e).has.property('class');
            expect(e).to.be.instanceOf(modelClasses[e.class]);
		})
	});

    it("Numeric IDs converted to string IDs and are correctly referenced", () => {
        graphData.nodes.forEach(e => {
            expect(e.id).to.be.a('string');
        });
        graphData.links.forEach(e => {
            expect(e.id).to.be.a('string');
            expect(e.source).to.be.instanceOf(modelClasses.Node);
            expect(e.target).to.be.instanceOf(modelClasses.Node);
        });
    });

    afterEach(() => {
	});
});

//TODO test toJSON, logger
