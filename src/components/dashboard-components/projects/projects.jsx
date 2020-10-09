import React from "react";

import img1 from 'assets/images/users/1.jpg';
import img2 from 'assets/images/users/2.jpg';
import img3 from 'assets/images/users/3.jpg';
import img4 from 'assets/images/users/4.jpg';

import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Input,
    Table
} from 'reactstrap';

const Projects = () => {
    return (
        /*--------------------------------------------------------------------------------*/
        /* Used In Dashboard-4 [General]                                                  */
        /*--------------------------------------------------------------------------------*/

        <Card>
            <CardBody>
                <div className="d-flex align-items-center">
                    <div>
                        <CardTitle>Blogs of the Month</CardTitle>
                        <CardSubtitle>Overview of Latest Month</CardSubtitle>
                    </div>
                    <div className="ml-auto d-flex no-block align-items-center">
                        <div className="dl">
                            <Input type="select" className="custom-select">
                                <option value="0">Monthly</option>
                                <option value="1">Daily</option>
                                <option value="2">Weekly</option>
                                <option value="3">Yearly</option>
                            </Input>
                        </div>
                    </div>
                </div>
                <Table className="no-wrap v-middle" responsive>
                    <thead>
                        <tr className="border-0">
                            <th className="border-0">Author</th>
                            <th className="border-0">Place</th>
                            <th className="border-0">Stay(in days)</th>
                            <th className="border-0">Budget</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="d-flex no-block align-items-center">
                                    <div className="mr-2"><img src={img1} alt="user" className="rounded-circle" width="45" /></div>
                                    <div className="">
                                        <h5 className="mb-0 font-16 font-medium">Hanna Gover</h5><span>hgover@gmail.com</span></div>
                                </div>
                            </td>
                            <td>Santorini, Greece</td>

                            <td>12</td>
                            <td className="blue-grey-text  text-darken-4 font-medium">$950</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex no-block align-items-center">
                                    <div className="mr-2"><img src={img2} alt="user" className="rounded-circle" width="45" /></div>
                                    <div className="">
                                        <h5 className="mb-0 font-16 font-medium">Pranjal Tiwari</h5><span>pranjal@gmail.com</span></div>
                                </div>
                            </td>
                            <td>Brisbane, Australia</td>


                            <td>18</td>
                            <td className="blue-grey-text  text-darken-4 font-medium">$1400</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex no-block align-items-center">
                                    <div className="mr-2"><img src={img3} alt="user" className="rounded-circle" width="45" /></div>
                                    <div className="">
                                        <h5 className="mb-0 font-16 font-medium">Vishesh Kadian</h5><span>vishesh@gmail.com</span></div>
                                </div>
                            </td>
                            <td>Prague, Czech Republic</td>
                            <td>7</td>
                            <td className="blue-grey-text  text-darken-4 font-medium">$96K</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex no-block align-items-center">
                                    <div className="mr-2"><img src={img4} alt="user" className="rounded-circle" width="45" /></div>
                                    <div className="">
                                        <h5 className="mb-0 font-16 font-medium">Nirmal Prabhu</h5><span>nirmal@gmail.com</span></div>
                                </div>
                            </td>
                            <td>Udaipur, India</td>
                            <td>4</td>
                            <td className="blue-grey-text  text-darken-4 font-medium">$2.5K</td>
                        </tr>
                    </tbody>
                </Table>
            </CardBody>
        </Card >
    );
}

export default Projects;
