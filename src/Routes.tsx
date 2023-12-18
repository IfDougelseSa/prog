import Home from "../src/pages/Home/index";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "components/Navbar";
import Bootstrap from "pages/BootStrap";
import Javascript from "pages/JavaScript";
import Reactnative from "pages/ReactNative";
import CSS from "pages/Css";
import Html from "pages/Html";
import Comments from "pages/Html/comments";
import Reactjs from "pages/ReactJs";
import Concepts from "pages/Concepts";
import SpringBoot from "pages/SpringBoot";
import Process from "pages/Concepts/process";
import Create from "pages/SpringBoot/create";
import Domain from "pages/SpringBoot/domain";
import Resource from "pages/SpringBoot/resource";
import JpaHibernate from "pages/SpringBoot/jpaHibernate";
import Crud from "pages/SpringBoot/crud";
import H2 from "pages/SpringBoot/h2";
import Onions from "pages/SpringBoot/onins";
import Java from "pages/Java";
import Program from "pages/Concepts/program";
import FirstProgram from "pages/Java/firstProgram";
import Operators from "pages/Java/operators";
import VariablesJava from "pages/Java/variablesJava";
import BasicOperations from "pages/Java/basicOperations";
import MathFunctions from "pages/Java/mathFunctions";
import ComparativeExpressions from "pages/Concepts/comparativeExpressions";
import LogicExpressions from "pages/Concepts/logicExpressions";
import ConditionalStructure from "pages/Concepts/conditionalStructure";
import CumulativeOperators from "pages/Concepts/cumulativeOperators";
import SwitchCase from "pages/Concepts/switchCase";
import ConditionalTernary from "pages/Concepts/conditionalTernary";
import Angular from "pages/Angular";
import FirstProject from "pages/Angular/firstProject";
import StructureAngular from "pages/Angular/structure";
import CreateComponent from "pages/Angular/createComponent";
import Unity from "pages/Unity";
import CommentsJs from "pages/JavaScript/commentsJs";
import VariablesJs from "pages/JavaScript/variablesJs";
import IncludeCss from "pages/Css/includeCss";
import ClassId from "pages/Css/classId";
import WaysToStyle from "pages/Css/waysToStyle";
import PaddingMargin from "pages/Css/paddingMargin";
import ShortCuts from "pages/Css/shortcuts";
import Float from "pages/Css/float";
import Position from "pages/Css/position";
import Cascate from "pages/Css/Cascate";
import Selectors from "pages/Css/selectors";
import AWS from "pages/AWS";
import Modulo1 from "pages/AWS/modulo1";
import TSO from "pages/TSO";
import TSOCreate from "pages/TSO/tsoCreate";
import Modulo2 from "pages/AWS/modulo2";
import CICS from "pages/CICS";
import SPRINGSECURITY from "pages/SpringSecurity/index";
import ChangeConfiguration from "pages/SpringSecurity/change-configurations";
import JAVAFX from "pages/JavaFX";
import Defining from "pages/SpringSecurity/defining";
import ARRAYSJAVA from "pages/Java/arrays";
import Introduction from "pages/Java/classObjectsMethodsString";
import Modulo3 from "pages/AWS/modulo3";
import Control1 from "pages/Java/control1";


const Routes = () => (
	<BrowserRouter>
		<Navbar />
		<Switch>
			{/* Home start pages */}
			<Route path="/" exact>
				<Home />
			</Route>
			{/* Concepts start pages */}
			<Route path="/concepts" exact>
				<Concepts />
			</Route>
			<Route path="/concepts/program">
				<Program />
			</Route>
			<Route path="/concepts/process">
				<Process />
			</Route>
			<Route path="/concepts/comparative-expressions">
				<ComparativeExpressions />
			</Route>
			<Route path="/concepts/logic-expressions">
				<LogicExpressions />
			</Route>
			<Route path="/concepts/conditional-structure">
				<ConditionalStructure />
			</Route>
			<Route path="/concepts/cumulative-operators">
				<CumulativeOperators />
			</Route>
			<Route path="/concepts/switch-case">
				<SwitchCase />
			</Route>
			<Route path="/concepts/conditional-ternary">
				<ConditionalTernary />
			</Route>
			{/* Html start pages */}
			<Route path="/html" exact>
				<Html />
			</Route>
			<Route path="/html/comments">
				<Comments />
			</Route>
			{/* CSS start pages */}
			<Route path="/css" exact>
				<CSS />
			</Route>
			<Route path="/css/include">
				<IncludeCss />
			</Route>
			<Route path="/css/class-id">
				<ClassId />
			</Route>
			<Route path="/css/ways-to-style">
				<WaysToStyle />
			</Route>
			<Route path="/css/padding-margin">
				<PaddingMargin />
			</Route>
			<Route path="/css/shortcuts">
				<ShortCuts />
			</Route>
			<Route path="/css/float">
				<Float />
			</Route>
			<Route path="/css/position">
				<Position />
			</Route>
			<Route path="/css/cascate">
				<Cascate />
			</Route>
			<Route path="/css/selectors">
				<Selectors />
			</Route>
			{/* Bootstrap start pages */}
			<Route path="/bootstrap">
				<Bootstrap />
			</Route>
			{/* JavaScript start pages */}
			<Route path="/javascript" exact>
				<Javascript />
			</Route>
			<Route path="/javascript/comments">
				<CommentsJs />
			</Route>
			<Route path="/javascript/variables">
				<VariablesJs />
			</Route>
			{/* React Native start pages */}
			<Route path="/react-native">
				<Reactnative />
			</Route>
			{/* ReactJS start pages */}
			<Route path="/react-js">
				<Reactjs />
			</Route>
			{/* SpringBoot start pages */}
			<Route path="/spring-boot" exact>
				<SpringBoot />
			</Route>
			<Route path="/spring-boot/create">
				<Create />
			</Route>
			<Route path="/spring-boot/domain">
				<Domain />
			</Route>
			<Route path="/spring-boot/resource">
				<Resource />
			</Route>
			<Route path="/spring-boot/mapping">
				<JpaHibernate />
			</Route>
			<Route path="/spring-boot/crud">
				<Crud />
			</Route>
			<Route path="/spring-boot/h2">
				<H2 />
			</Route>
			<Route path="/spring-boot/onions">
				<Onions />
			</Route>
			{/* Java start pages */}
			<Route path="/java" exact>
				<Java />
			</Route>
			<Route path="/java/first-program">
				<FirstProgram />
			</Route>
			<Route path="/java/operators">
				<Operators />
			</Route>
			<Route path="/java/variables">
				<VariablesJava />
			</Route>
			<Route path="/java/basic-operations">
				<BasicOperations />
			</Route>
			<Route path="/java/math-functions">
				<MathFunctions />
			</Route>
			<Route path="/java/arrays-arrayslists">
				<ARRAYSJAVA />
			</Route>
			<Route path="/java/introduction">
				<Introduction />
			</Route>
			<Route path="/java/control1">
				<Control1 />
			</Route>
			{/* Angular start pages */}
			<Route path="/angular" exact>
				<Angular />
			</Route>
			<Route path="/angular/first-project">
				<FirstProject />
			</Route>
			<Route path="/angular/angular-structure">
				<StructureAngular />
			</Route>
			<Route path="/angular/angular-component">
				<CreateComponent />
			</Route>
			{/* Unity start pages */}
			<Route path="/unity" exact>
				<Unity />
			</Route>
			{/* AWS start pages */}
			<Route path="/aws" exact>
				<AWS />
			</Route>
			<Route path="/aws/primeiro-modulo">
				<Modulo1 />
			</Route>
			<Route path="/aws/segundo-modulo">
				<Modulo2 />
			</Route>
			<Route path="/aws/terceiro-modulo">
				<Modulo3 />
			</Route>
			{/* TSO start pages */}
			<Route path="/tso" exact>
				<TSO />
			</Route>
			<Route path="/tso/create" >
				<TSOCreate />
			</Route>
			{/*CICS start pages */}
			<Route path="/cics" exact>
				<CICS />
			</Route>
			{/*Spring Security start pages */}
			<Route path="/spring-security" exact>
				<SPRINGSECURITY />
		
			</Route>
			<Route path="/change-configurations">
				<ChangeConfiguration />
			</Route>

			<Route path="/defining">
				<Defining />
			</Route>

			<Route path="/javafx" exact>
			 <JAVAFX />
			</Route>

		</Switch>
	</BrowserRouter>
);

export default Routes;
