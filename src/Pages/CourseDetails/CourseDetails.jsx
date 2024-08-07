import React from 'react';
import './CourseDetails.css';
import { useParams, Route, Routes, Navigate } from 'react-router-dom';

import JavaSidebar from '../../Components/SideBar/Java/JavaSidebar.js';
import JavaIntroduction from '../../Components/SideBar/Java/JavaIntroduction.js';
import Oops from '../../Components/SideBar/Java/Oops.js';

import DBMSSidebar from '../../Components/SideBar/DBMS/DBMSSidebar.jsx';
import DBMSIntroduction from '../../Components/SideBar/DBMS/DBMSIntroduction.js';
import DDL from '../../Components/SideBar/DBMS/DDL.js';

import MLSidebar from '../../Components/SideBar/MachineLearning/MLSidebar.jsx';
import MLIntroduction from '../../Components/SideBar/MachineLearning/MLIntroduction.jsx';
import TypesOfLearning from '../../Components/SideBar/MachineLearning/TypesOfLearning.jsx';
import ConfusionMatrix from '../../Components/SideBar/MachineLearning/ConfusionMatrix.jsx';
import Perceptron from '../../Components/SideBar/MachineLearning/Perceptron.jsx';
import ActivationFunctions from '../../Components/SideBar/MachineLearning/ActivationFunctions.jsx';
import EnsembleMethods from '../../Components/SideBar/MachineLearning/EnsembleMethods.jsx';
import NonAssociativeLearning from '../../Components/SideBar/MachineLearning/NonAssociativeLearning.jsx';


import CNSidebar from '../../Components/SideBar/ComputerNetworks/CNSidebar.jsx';
import CNIntroduction from '../../Components/SideBar/ComputerNetworks/CNIntroduction.jsx';
import Topology from '../../Components/SideBar/ComputerNetworks/Topology.jsx';




const CourseDetails = () => {
  let { courseName } = useParams();

  // Normalize courseName by replacing hyphens with spaces
  const normalizedCourseName = courseName.replace(/-/g, ' ').toLowerCase();

  const sidebars = {
    'java': JavaSidebar,
    'dbms': DBMSSidebar,
    'machine learning': MLSidebar,
    'computer networks':CNSidebar,
  };

  const contentComponents = {
    'java': {
      introduction: JavaIntroduction,
      oops: Oops,
    },
    'dbms': {
      introduction: DBMSIntroduction,
      ddl: DDL,
    },
    'machine learning': {
      introduction: MLIntroduction,
      typesoflearning: TypesOfLearning,
      activationfunctions: ActivationFunctions,
      confusionmatrix:ConfusionMatrix,
      perceptron:Perceptron,
      ensemblemethods:EnsembleMethods,
      nonassociativelearning:NonAssociativeLearning,
    },
    'computer networks':{
      introduction:CNIntroduction,
      topology:Topology
    }
  };

  const SidebarComponent = sidebars[normalizedCourseName] || (() => <div>No Sidebar Available</div>);
  const contentComponent = contentComponents[normalizedCourseName] || {};

  return (
    <div className="details">
      <h3>Learn everything about {courseName.replace(/-/g, ' ')}</h3>
      <div className="details-contain">
        <div className="details-left">
          <SidebarComponent />
        </div>
        <div className="details-right">
          <Routes>
            <Route path="/" element={<Navigate to="introduction" />} />
            <Route path="introduction" element={contentComponent.introduction ? <contentComponent.introduction /> : <div>No Content Available</div>} />
            <Route path="oops" element={contentComponent.oops ? <contentComponent.oops /> : <div>No Content Available</div>} />
            <Route path="ddl" element={contentComponent.ddl ? <contentComponent.ddl /> : <div>No Content Available</div>} />
            <Route path="typesoflearning" element={contentComponent.typesoflearning ? <contentComponent.typesoflearning /> : <div>No Content Available</div>} />
            <Route path="activationfunctions" element={contentComponent.activationfunctions ? <contentComponent.activationfunctions /> : <div>No Content Available</div>} />
            <Route path="confusionmatrix" element={contentComponent.confusionmatrix ? <contentComponent.confusionmatrix /> : <div>No Content Available</div>} />
            <Route path="perceptron" element={contentComponent.perceptron ? <contentComponent.perceptron /> : <div>No Content Available</div>} />
            <Route path="ensemblemethods" element={contentComponent.ensemblemethods ? <contentComponent.ensemblemethods/> : <div>No Content Available</div>} />
            <Route path="nonassociativelearning" element={contentComponent.nonassociativelearning ? <contentComponent.nonassociativelearning /> : <div>No Content Available</div>} />

            <Route path="topology" element={contentComponent.topology ? <contentComponent.topology /> : <div>No Content Available</div>} />
           
            {/* Add other routes as necessary */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
