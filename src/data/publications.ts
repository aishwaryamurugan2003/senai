export interface Publication {
  id: string;
  year: number;
  title: string;
  authors: string[];
  venue: string;
  keywords: string[];
  pdfUrl?: string;
  doi?: string;
  category: 'Conference' | 'Journal' | 'Workshop' | 'Preprint';
}

export const publications: Publication[] = [
  {
    id: 'pub1',
    year: 2003,
    title: 'A review of process fault detection and diagnosis: Part I: Quantitative model-based methods',
    authors: ['V Venkatasubramanian', 'R Rengaswamy', 'K Yin', 'SN Kavuri'],
    venue: 'Computers & chemical engineering 27 (3), 293-311',
    keywords: [],
    doi: '10.1016/S0098-1354(02)00160-6',
    category: 'Journal'
  },
  {
    id: 'pub2',
    year: 2003,
    title: 'A review of process fault detection and diagnosis: Part III: Process history based methods',
    authors: ['V Venkatasubramanian', 'R Rengaswamy', 'SN Kavuri', 'K Yin'],
    venue: 'Computers & chemical engineering 27 (3), 327-346',
    keywords: [],
    doi: '10.1016/S0098-1354(02)00162-X',
    category: 'Journal'
  },
  {
    id: 'pub3',
    year: 2003,
    title: 'A review of process fault detection and diagnosis: Part II: Qualitative models and search strategies',
    authors: ['V Venkatasubramanian', 'R Rengaswamy', 'SN Kavuri'],
    venue: 'Computers & chemical engineering 27 (3), 313-326',
    keywords: [],
    doi: '10.1016/S0098-1354(02)00161-8',
    category: 'Journal'
  },
  {
    id: 'pub4',
    year: 1995,
    title: 'A syntactic pattern-recognition approach for process monitoring and fault diagnosis',
    authors: ['R Rengaswamy', 'V Venkatasubramanian'],
    venue: 'Engineering Applications of Artificial Intelligence 8 (1), 35-51',
    keywords: [],
    doi: '10.1016/0952-1976(94)00058-U',
    category: 'Journal'
  },
  {
    id: 'pub5',
    year: 1999,
    title: 'Locating sensors in complex chemical plants based on fault diagnostic observability criteria',
    authors: ['R Raghuraj', 'M Bhushan', 'R Rengaswamy'],
    venue: 'AICHE journal 45 (2), 310-322',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Locating%20sensors%20in%20complex%20chemical%20plants%20based%20on%20fault%20diagnostic%20observability%20criteria',
    category: 'Journal'
  },
  {
    id: 'pub6',
    year: 2009,
    title: 'A review of solid oxide fuel cell (SOFC) dynamic models',
    authors: ['D Bhattacharyya', 'R Rengaswamy'],
    venue: 'Industrial & Engineering Chemistry Research 48 (13), 6068-6086',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=A%20review%20of%20solid%20oxide%20fuel%20cell%20%28SOFC%29%20dynamic%20models',
    category: 'Journal'
  },
  {
    id: 'pub7',
    year: 2007,
    title: 'Fault diagnosis using dynamic trend analysis: A review and recent developments',
    authors: ['MR Maurya', 'R Rengaswamy', 'V Venkatasubramanian'],
    venue: 'Engineering Applications of artificial intelligence 20 (2), 133-146',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Fault%20diagnosis%20using%20dynamic%20trend%20analysis%3A%20A%20review%20and%20recent%20developments',
    category: 'Journal'
  },
  {
    id: 'pub8',
    year: 2006,
    title: 'Robust and reliable estimation via unscented recursive nonlinear dynamic data reconciliation',
    authors: ['P Vachhani', 'S Narasimhan', 'R Rengaswamy'],
    venue: 'Journal of process control 16 (10), 1075-1086',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Robust%20and%20reliable%20estimation%20via%20unscented%20recursive%20nonlinear%20dynamic%20data%20reconciliation',
    category: 'Journal'
  },
  {
    id: 'pub9',
    year: 2003,
    title: 'Fuzzy-logic based trend classification for fault diagnosis of chemical processes',
    authors: ['S Dash', 'R Rengaswamy', 'V Venkatasubramanian'],
    venue: 'Computers & Chemical Engineering 27 (3), 347-362',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Fuzzy-logic%20based%20trend%20classification%20for%20fault%20diagnosis%20of%20chemical%20processes',
    category: 'Journal'
  },
  {
    id: 'pub10',
    year: 2004,
    title: 'Application of signed digraphs-based analysis for fault diagnosis of chemical process flowsheets',
    authors: ['MR Maurya', 'R Rengaswamy', 'V Venkatasubramanian'],
    venue: 'Engineering Applications of Artificial Intelligence 17 (5), 501-518',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Application%20of%20signed%20digraphs-based%20analysis%20for%20fault%20diagnosis%20of%20chemical%20process%20flowsheets',
    category: 'Journal'
  },
  {
    id: 'pub11',
    year: 2008,
    title: 'Solid oxide fuel cell modeling',
    authors: ['A Gebregergis', 'P Pillay', 'D Bhattacharyya', 'R Rengaswemy'],
    venue: 'IEEE Transactions on Industrial Electronics 56 (1), 139-148',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Solid%20oxide%20fuel%20cell%20modeling',
    category: 'Journal'
  },
  {
    id: 'pub12',
    year: 2003,
    title: 'A systematic framework for the development and analysis of signed digraphs for chemical processes. 1. Algorithms and analysis',
    authors: ['MR Maurya', 'R Rengaswamy', 'V Venkatasubramanian'],
    venue: 'Industrial & engineering chemistry research 42 (20), 4789-4810',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=A%20systematic%20framework%20for%20the%20development%20and%20analysis%20of%20signed%20digraphs%20for%20chemical%20processes.%201.%20Algorithms%20and%20analysis',
    category: 'Journal'
  },
  {
    id: 'pub13',
    year: 2005,
    title: 'Control loop performance assessment. 2. Hammerstein model approach for stiction diagnosis',
    authors: ['R Srinivasan', 'R Rengaswamy', 'S Narasimhan', 'R Miller'],
    venue: 'Industrial & engineering chemistry research 44 (17), 6719-6728',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Control%20loop%20performance%20assessment.%202.%20Hammerstein%20model%20approach%20for%20stiction%20diagnosis',
    category: 'Journal'
  },
  {
    id: 'pub14',
    year: 2001,
    title: 'A qualitative shape analysis formalism for monitoring control loop performance',
    authors: ['R Rengaswamy', 'T Hägglund', 'V Venkatasubramanian'],
    venue: 'Engineering Applications of Artificial Intelligence 14 (1), 23-33',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=A%20qualitative%20shape%20analysis%20formalism%20for%20monitoring%20control%20loop%20performance',
    category: 'Journal'
  },
  {
    id: 'pub15',
    year: 2007,
    title: 'A signed directed graph and qualitative trend analysis-based framework for incipient fault diagnosis',
    authors: ['MR Maurya', 'R Rengaswamy', 'V Venkatasubramanian'],
    venue: 'Chemical Engineering Research and Design 85 (10), 1407-1422',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=A%20signed%20directed%20graph%20and%20qualitative%20trend%20analysis-based%20framework%20for%20incipient%20fault%20diagnosis',
    category: 'Journal'
  },
  {
    id: 'pub16',
    year: 2005,
    title: 'Recursive estimation in constrained nonlinear dynamical systems',
    authors: ['P Vachhani', 'R Rengaswamy', 'V Gangwal', 'S Narasimhan'],
    venue: 'AIChE Journal 51 (3), 946-959',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Recursive%20estimation%20in%20constrained%20nonlinear%20dynamical%20systems',
    category: 'Journal'
  },
  {
    id: 'pub17',
    year: 2008,
    title: 'Approaches for efficient stiction compensation in process control valves',
    authors: ['R Srinivasan', 'R Rengaswamy'],
    venue: 'Computers & Chemical Engineering 32 (1-2), 218-229',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Approaches%20for%20efficient%20stiction%20compensation%20in%20process%20control%20valves',
    category: 'Journal'
  },
  {
    id: 'pub18',
    year: 2006,
    title: 'A signed directed graph-based systematic framework for steady-state malfunction diagnosis inside control loops',
    authors: ['MR Maurya', 'R Rengaswamy', 'V Venkatasubramanian'],
    venue: 'Chemical Engineering Science 61 (6), 1790-1810',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=A%20signed%20directed%20graph-based%20systematic%20framework%20for%20steady-state%20malfunction%20diagnosis%20inside%20control%20loops',
    category: 'Journal'
  },
  {
    id: 'pub19',
    year: 2007,
    title: 'A two-dimensional steady state model including the effect of liquid water for a PEM fuel cell cathode',
    authors: ['RM Rao', 'D Bhattacharyya', 'R Rengaswamy', 'SR Choudhury'],
    venue: 'Journal of Power Sources 173 (1), 375-393',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=A%20two-dimensional%20steady%20state%20model%20including%20the%20effect%20of%20liquid%20water%20for%20a%20PEM%20fuel%20cell%20cathode',
    category: 'Journal'
  },
  {
    id: 'pub20',
    year: 2007,
    title: 'A modified empirical mode decomposition (EMD) process for oscillation characterization in control loops',
    authors: ['R Srinivasan', 'R Rengaswamy', 'R Miller'],
    venue: 'Control Engineering Practice 15 (9), 1135-1148',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=A%20modified%20empirical%20mode%20decomposition%20%28EMD%29%20process%20for%20oscillation%20characterization%20in%20control%20loops',
    category: 'Journal'
  },
  {
    id: 'pub21',
    year: 2000,
    title: 'Design of sensor location based on various fault diagnostic observability and reliability criteria',
    authors: ['M Bhushan', 'R Rengaswamy'],
    venue: 'Computers & Chemical Engineering 24 (2-7), 735-741',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Design%20of%20sensor%20location%20based%20on%20various%20fault%20diagnostic%20observability%20and%20reliability%20criteria',
    category: 'Journal'
  },
  {
    id: 'pub22',
    year: 2000,
    title: 'Design of sensor network based on the signed directed graph of the process for efficient fault diagnosis',
    authors: ['M Bhushan', 'R Rengaswamy'],
    venue: 'Industrial & engineering chemistry research 39 (4), 999-1019',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Design%20of%20sensor%20network%20based%20on%20the%20signed%20directed%20graph%20of%20the%20process%20for%20efficient%20fault%20diagnosis',
    category: 'Journal'
  },
  {
    id: 'pub23',
    year: 2004,
    title: 'A novel interval-halving framework for automated identification of process trends',
    authors: ['S Dash', 'MR Maurya', 'V Venkatasubramanian', 'R Rengaswamy'],
    venue: 'AIChE journal 50 (1), 149-162',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=A%20novel%20interval-halving%20framework%20for%20automated%20identification%20of%20process%20trends',
    category: 'Journal'
  },
  {
    id: 'pub24',
    year: 2002,
    title: 'Comprehensive design of a sensor network for chemical plants based on various diagnosability and reliability criteria. 1. Framework',
    authors: ['M Bhushan', 'R Rengaswamy'],
    venue: 'Industrial & engineering chemistry research 41 (7), 1826-1839',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Comprehensive%20design%20of%20a%20sensor%20network%20for%20chemical%20plants%20based%20on%20various%20diagnosability%20and%20reliability%20criteria.%201.%20Framework',
    category: 'Journal'
  },
  {
    id: 'pub25',
    year: 2005,
    title: 'Control loop performance assessment. 1. A qualitative approach for stiction diagnosis',
    authors: ['R Srinivasan', 'R Rengaswamy', 'R Miller'],
    venue: 'Industrial & engineering chemistry research 44 (17), 6708-6718',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Control%20loop%20performance%20assessment.%201.%20A%20qualitative%20approach%20for%20stiction%20diagnosis',
    category: 'Journal'
  },
  {
    id: 'pub26',
    year: 2005,
    title: 'Fault diagnosis by qualitative trend analysis of the principal components',
    authors: ['MR Maurya', 'R Rengaswamy', 'V Venkatasubramanian'],
    venue: 'Chemical Engineering Research and Design 83 (9), 1122-1132',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Fault%20diagnosis%20by%20qualitative%20trend%20analysis%20of%20the%20principal%20components',
    category: 'Journal'
  },
  {
    id: 'pub27',
    year: 2003,
    title: 'A systematic framework for the development and analysis of signed digraphs for chemical processes. 2. Control loops and flowsheet analysis',
    authors: ['MR Maurya', 'R Rengaswamy', 'V Venkatasubramanian'],
    venue: 'Industrial & Engineering Chemistry Research 42 (20), 4811-4827',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=A%20systematic%20framework%20for%20the%20development%20and%20analysis%20of%20signed%20digraphs%20for%20chemical%20processes.%202.%20Control%20loops%20and%20flowsheet%20analysis',
    category: 'Journal'
  },
  {
    id: 'pub28',
    year: 2010,
    title: 'Recursive state estimation techniques for nonlinear differential algebraic systems',
    authors: ['RK Mandela', 'R Rengaswamy', 'S Narasimhan', 'LN Sridhar'],
    venue: 'Chemical engineering science 65 (16), 4548-4556',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Recursive%20state%20estimation%20techniques%20for%20nonlinear%20differential%20algebraic%20systems',
    category: 'Journal'
  },
  {
    id: 'pub29',
    year: 2008,
    title: 'New nonlinear residual feedback observer for fault diagnosis in nonlinear systems',
    authors: ['S Narasimhan', 'P Vachhani', 'R Rengaswamy'],
    venue: 'Automatica 44 (9), 2222-2229',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=New%20nonlinear%20residual%20feedback%20observer%20for%20fault%20diagnosis%20in%20nonlinear%20systems',
    category: 'Journal'
  },
  {
    id: 'pub30',
    year: 2005,
    title: 'Stiction compensation in process control loops: A framework for integrating stiction measure and compensation',
    authors: ['R Srinivasan', 'R Rengaswamy'],
    venue: 'Industrial & engineering chemistry research 44 (24), 9164-9174',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Stiction%20compensation%20in%20process%20control%20loops%3A%20A%20framework%20for%20integrating%20stiction%20measure%20and%20compensation',
    category: 'Journal'
  },
  {
    id: 'pub31',
    year: 2010,
    title: 'A framework for on-line trend extraction and fault diagnosis',
    authors: ['MR Maurya', 'PK Paritosh', 'R Rengaswamy', 'V Venkatasubramanian'],
    venue: 'Engineering Applications of Artificial Intelligence 23 (6), 950-960',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=A%20framework%20for%20on-line%20trend%20extraction%20and%20fault%20diagnosis',
    category: 'Journal'
  },
  {
    id: 'pub32',
    year: 2019,
    title: 'Interfacial contact resistance in polymer electrolyte membrane fuel cells: Recent developments and challenges',
    authors: ['AC Bhosale', 'R Rengaswamy'],
    venue: 'Renewable and Sustainable Energy Reviews 115, 109351',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Interfacial%20contact%20resistance%20in%20polymer%20electrolyte%20membrane%20fuel%20cells%3A%20Recent%20developments%20and%20challenges',
    category: 'Journal'
  },
  {
    id: 'pub33',
    year: 2009,
    title: 'Dynamic modeling and validation studies of a tubular solid oxide fuel cell',
    authors: ['D Bhattacharyya', 'R Rengaswamy', 'C Finnerty'],
    venue: 'Chemical Engineering Science 64 (9), 2158-2172',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Dynamic%20modeling%20and%20validation%20studies%20of%20a%20tubular%20solid%20oxide%20fuel%20cell',
    category: 'Journal'
  },
  {
    id: 'pub34',
    year: 2008,
    title: 'Robust sensor network design for fault diagnosis',
    authors: ['M Bhushan', 'S Narasimhan', 'R Rengaswamy'],
    venue: 'Computers & Chemical Engineering 32 (4-5), 1067-1084',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Robust%20sensor%20network%20design%20for%20fault%20diagnosis',
    category: 'Journal'
  },
  {
    id: 'pub35',
    year: 2012,
    title: 'Control loop performance assessment using detrended fluctuation analysis (DFA)',
    authors: ['B Srinivasan', 'T Spinner', 'R Rengaswamy'],
    venue: 'Automatica 48 (7), 1359-1363',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Control%20loop%20performance%20assessment%20using%20detrended%20fluctuation%20analysis%20%28DFA%29',
    category: 'Journal'
  },
  {
    id: 'pub36',
    year: 2022,
    title: 'Integration of machine learning and first principles models',
    authors: ['L Rajulapati', 'S Chinta', 'B Shyamala', 'R Rengaswamy'],
    venue: 'AIChE Journal 68 (6), e17715',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Integration%20of%20machine%20learning%20and%20first%20principles%20models',
    category: 'Journal'
  },
  {
    id: 'pub37',
    year: 2000,
    title: 'A fast training neural network and its updation for incipient fault detection and diagnosis',
    authors: ['R Rengaswamy', 'V Venkatasubramanian'],
    venue: 'Computers & Chemical Engineering 24 (2-7), 431-437',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=A%20fast%20training%20neural%20network%20and%20its%20updation%20for%20incipient%20fault%20detection%20and%20diagnosis',
    category: 'Journal'
  },
  {
    id: 'pub38',
    year: 2017,
    title: 'Rapid impedance measurement using chirp signals for electrochemical system analysis',
    authors: ['B Bullecks', 'R Suresh', 'R Rengaswamy'],
    venue: 'Computers & chemical engineering 106, 421-436',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Rapid%20impedance%20measurement%20using%20chirp%20signals%20for%20electrochemical%20system%20analysis',
    category: 'Journal'
  },
  {
    id: 'pub39',
    year: 2012,
    title: 'Automatic oscillation detection and characterization in closed-loop systems',
    authors: ['B Srinivasan', 'R Rengaswamy'],
    venue: 'Control Engineering Practice 20 (8), 733-746',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Automatic%20oscillation%20detection%20and%20characterization%20in%20closed-loop%20systems',
    category: 'Journal'
  },
  {
    id: 'pub40',
    year: 2002,
    title: 'Comprehensive design of a sensor network for chemical plants based on various diagnosability and reliability criteria. 2. Applications',
    authors: ['M Bhushan', 'R Rengaswamy'],
    venue: 'Industrial & engineering chemistry research 41 (7), 1840-1860',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Comprehensive%20design%20of%20a%20sensor%20network%20for%20chemical%20plants%20based%20on%20various%20diagnosability%20and%20reliability%20criteria.%202.%20Applications',
    category: 'Journal'
  },
  {
    id: 'pub41',
    year: 2010,
    title: 'Performance analysis of a PEM fuel cell cathode with multiple catalyst layers',
    authors: ['M Srinivasarao', 'D Bhattacharyya', 'R Rengaswamy', 'S Narasimhan'],
    venue: 'International Journal of Hydrogen Energy 35 (12), 6356-6365',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Performance%20analysis%20of%20a%20PEM%20fuel%20cell%20cathode%20with%20multiple%20catalyst%20layers',
    category: 'Journal'
  },
  {
    id: 'pub42',
    year: 2002,
    title: 'A two-dimensional steady-state model for phosphoric acid fuel cells (PAFC)',
    authors: ['SR Choudhury', 'MB Deshmukh', 'R Rengaswamy'],
    venue: 'Journal of Power Sources 112 (1), 137-152',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=A%20two-dimensional%20steady-state%20model%20for%20phosphoric%20acid%20fuel%20cells%20%28PAFC%29',
    category: 'Journal'
  },
  {
    id: 'pub43',
    year: 2011,
    title: 'Kalman-based strategies for fault detection and identification (FDI): Extensions and critical evaluation for a buffer tank system',
    authors: ['K Villez', 'B Srinivasan', 'R Rengaswamy', 'S Narasimhan'],
    venue: 'Computers & chemical engineering 35 (5), 806-816',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Kalman-based%20strategies%20for%20fault%20detection%20and%20identification%20%28FDI%29%3A%20Extensions%20and%20critical%20evaluation%20for%20a%20buffer%20tank%20system',
    category: 'Journal'
  },
  {
    id: 'pub44',
    year: 2006,
    title: 'Dynamic characteristics of spherical agglomerate for study of cathode catalyst layers in proton exchange membrane fuel cells (PEMFC)',
    authors: ['RM Rao', 'R Rengaswamy'],
    venue: 'Journal of Power Sources 158 (1), 110-123',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Dynamic%20characteristics%20of%20spherical%20agglomerate%20for%20study%20of%20cathode%20catalyst%20layers%20in%20proton%20exchange%20membrane%20fuel%20cells%20%28PEMFC%29',
    category: 'Journal'
  },
  {
    id: 'pub45',
    year: 2019,
    title: 'Machine learning derived quantitative structure property relationship (QSPR) to predict drug solubility in binary solvent systems',
    authors: ['S Chinta', 'R Rengaswamy'],
    venue: 'Industrial & Engineering Chemistry Research 58 (8), 3082-3092',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Machine%20learning%20derived%20quantitative%20structure%20property%20relationship%20%28QSPR%29%20to%20predict%20drug%20solubility%20in%20binary%20solvent%20systems',
    category: 'Journal'
  },
  {
    id: 'pub46',
    year: 2010,
    title: 'PEMFC fault diagnosis, modeling, and mitigation',
    authors: ['A Gebregergis', 'P Pillay', 'R Rengaswamy'],
    venue: 'IEEE Transactions on Industry Applications 46 (1), 295-303',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=PEMFC%20fault%20diagnosis%2C%20modeling%2C%20and%20mitigation',
    category: 'Journal'
  },
  {
    id: 'pub47',
    year: 2001,
    title: 'A framework for integrating diagnostic knowledge with nonlinear optimization for data reconciliation and parameter estimation in dynamic systems',
    authors: ['P Vachhani', 'R Rengaswamy', 'V Venkatasubramanian'],
    venue: 'Chemical Engineering Science 56 (6), 2133-2148',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=A%20framework%20for%20integrating%20diagnostic%20knowledge%20with%20nonlinear%20optimization%20for%20data%20reconciliation%20and%20parameter%20estimation%20in%20dynamic%20systems',
    category: 'Journal'
  },
  {
    id: 'pub48',
    year: 2007,
    title: 'Isothermal models for anode-supported tubular solid oxide fuel cells',
    authors: ['D Bhattacharyya', 'R Rengaswamy', 'C Finnerty'],
    venue: 'Chemical Engineering Science 62 (16), 4250-4267',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Isothermal%20models%20for%20anode-supported%20tubular%20solid%20oxide%20fuel%20cells',
    category: 'Journal'
  },
  {
    id: 'pub49',
    year: 2013,
    title: 'Generalized shape constrained spline fitting for qualitative analysis of trends',
    authors: ['K Villez', 'V Venkatasubramanian', 'R Rengaswamy'],
    venue: 'Computers & chemical engineering 58, 116-134',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Generalized%20shape%20constrained%20spline%20fitting%20for%20qualitative%20analysis%20of%20trends',
    category: 'Journal'
  },
  {
    id: 'pub50',
    year: 2012,
    title: 'Optimization studies of a polymer electrolyte membrane fuel cell with multiple catalyst layers',
    authors: ['M Srinivasarao', 'D Bhattacharyya', 'R Rengaswamy'],
    venue: 'Journal of Power Sources 206, 197-203',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Optimization%20studies%20of%20a%20polymer%20electrolyte%20membrane%20fuel%20cell%20with%20multiple%20catalyst%20layers',
    category: 'Journal'
  },
  {
    id: 'pub51',
    year: 2001,
    title: 'A comparison of model-based and neural network-based diagnostic methods',
    authors: ['R Rengaswamy', 'D Mylaraswamy', 'KE Arzen', 'V Venkatasubramanian'],
    venue: 'Engineering Applications of Artificial Intelligence 14 (6), 805-818',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=A%20comparison%20of%20model-based%20and%20neural%20network-based%20diagnostic%20methods',
    category: 'Journal'
  },
  {
    id: 'pub52',
    year: 1997,
    title: 'An optimal strategy to model microbial growth in a multiple substrate environment',
    authors: ['KV Venkatesh', 'P Doshi', 'R Rengaswamy'],
    venue: 'Biotechnology and bioengineering 56 (6), 635-644',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=An%20optimal%20strategy%20to%20model%20microbial%20growth%20in%20a%20multiple%20substrate%20environment',
    category: 'Journal'
  },
  {
    id: 'pub53',
    year: 2013,
    title: 'Receding-horizon nonlinear Kalman (RNK) filter for state estimation',
    authors: ['R Rengaswamy', 'S Narasimhan', 'V Kuppuraj'],
    venue: 'IEEE Transactions on Automatic Control 58 (8), 2054-2059',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Receding-horizon%20nonlinear%20Kalman%20%28RNK%29%20filter%20for%20state%20estimation',
    category: 'Journal'
  },
  {
    id: 'pub54',
    year: 2020,
    title: 'Development of cylindrical PEM fuel cells with semi-cylindrical cathode current collectors',
    authors: ['SR Suseendiran', 'S Pearn-Rowe', 'R Rengaswamy'],
    venue: 'International Journal of Hydrogen Energy 45 (17), 10549-10558',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Development%20of%20cylindrical%20PEM%20fuel%20cells%20with%20semi-cylindrical%20cathode%20current%20collectors',
    category: 'Journal'
  },
  {
    id: 'pub55',
    year: 2012,
    title: 'Constrained unscented recursive estimator for nonlinear dynamic systems',
    authors: ['RK Mandela', 'V Kuppuraj', 'R Rengaswamy', 'S Narasimhan'],
    venue: 'Journal of Process Control 22 (4), 718-728',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Constrained%20unscented%20recursive%20estimator%20for%20nonlinear%20dynamic%20systems',
    category: 'Journal'
  },
  {
    id: 'pub56',
    year: 2014,
    title: 'Data-based automated diagnosis and iterative retuning of proportional-integral (PI) controllers',
    authors: ['T Spinner', 'B Srinivasan', 'R Rengaswamy'],
    venue: 'Control Engineering Practice 29, 23-41',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Data-based%20automated%20diagnosis%20and%20iterative%20retuning%20of%20proportional-integral%20%28PI%29%20controllers',
    category: 'Journal'
  },
  {
    id: 'pub57',
    year: 2006,
    title: 'A distributed dynamic model for chronoamperometry, chronopotentiometry and gas starvation studies in PEM fuel cell cathode',
    authors: ['RM Rao', 'R Rengaswamy'],
    venue: 'Chemical Engineering Science 61 (22), 7393-7409',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=A%20distributed%20dynamic%20model%20for%20chronoamperometry%2C%20chronopotentiometry%20and%20gas%20starvation%20studies%20in%20PEM%20fuel%20cell%20cathode',
    category: 'Journal'
  },
  {
    id: 'pub58',
    year: 2006,
    title: 'Optimization study of an agglomerate model for platinum reduction and performance in PEM fuel cell cathode',
    authors: ['RM Rao', 'R Rengaswamy'],
    venue: 'Chemical Engineering Research and Design 84 (10), 952-964',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Optimization%20study%20of%20an%20agglomerate%20model%20for%20platinum%20reduction%20and%20performance%20in%20PEM%20fuel%20cell%20cathode',
    category: 'Journal'
  },
  {
    id: 'pub59',
    year: 2022,
    title: 'Metabolic modeling of host-microbe interactions for therapeutics in colorectal cancer',
    authors: ['P Bhalla', 'R Rengaswamy', 'D Karunagaran', 'GK Suraishkumar', 'S Sahoo'],
    venue: 'NPJ systems biology and applications 8 (1), 1',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Metabolic%20modeling%20of%20host-microbe%20interactions%20for%20therapeutics%20in%20colorectal%20cancer',
    category: 'Journal'
  },
  {
    id: 'pub60',
    year: 2016,
    title: 'Sensor network design for contaminant detection and identification in water distribution networks',
    authors: ['VR Palleti', 'S Narasimhan', 'R Rengaswamy', 'R Teja', 'SM Bhallamudi'],
    venue: 'Computers & Chemical Engineering 87, 246-256',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Sensor%20network%20design%20for%20contaminant%20detection%20and%20identification%20in%20water%20distribution%20networks',
    category: 'Journal'
  },
  {
    id: 'pub61',
    year: 2016,
    title: 'Phosphoric acid fuel cells',
    authors: ['DE Eapen', 'SR Suseendiran', 'R Rengaswamy'],
    venue: 'Compendium of hydrogen energy, 57-70',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Phosphoric%20acid%20fuel%20cells',
    category: 'Journal'
  },
  {
    id: 'pub62',
    year: 2011,
    title: 'Development of a cylindrical PEM fuel cell',
    authors: ['B Bullecks', 'R Rengaswamy', 'D Bhattacharyya', 'G Campbell'],
    venue: 'International Journal of Hydrogen Energy 36 (1), 713-719',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Development%20of%20a%20cylindrical%20PEM%20fuel%20cell',
    category: 'Journal'
  },
  {
    id: 'pub63',
    year: 2010,
    title: 'System identification and nonlinear model predictive control of a solid oxide fuel cell',
    authors: ['D Bhattacharyya', 'R Rengaswamy'],
    venue: 'Industrial & engineering chemistry research 49 (10), 4800-4808',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=System%20identification%20and%20nonlinear%20model%20predictive%20control%20of%20a%20solid%20oxide%20fuel%20cell',
    category: 'Journal'
  },
  {
    id: 'pub64',
    year: 2019,
    title: 'Low grade heat recovery for power generation through electrochemical route: Vanadium Redox Flow Battery, a case study',
    authors: ['DE Eapen', 'SR Choudhury', 'R Rengaswamy'],
    venue: 'Applied Surface Science 474, 262-268',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Low%20grade%20heat%20recovery%20for%20power%20generation%20through%20electrochemical%20route%3A%20Vanadium%20Redox%20Flow%20Battery%2C%20a%20case%20study',
    category: 'Journal'
  },
  {
    id: 'pub65',
    year: 2019,
    title: 'Rapid humidity regulation by mixing of dry and humid gases with feedback control for PEM fuel cells',
    authors: ['S Raman', 'S Swaminathan', 'S Bhardwaj', 'HK Tanneru', 'B Bullecks'],
    venue: 'International Journal of Hydrogen Energy 44 (1), 389-407',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Rapid%20humidity%20regulation%20by%20mixing%20of%20dry%20and%20humid%20gases%20with%20feedback%20control%20for%20PEM%20fuel%20cells',
    category: 'Journal'
  },
  {
    id: 'pub66',
    year: 2015,
    title: 'Classification of high-temperature PEM fuel cell degradation mechanisms using equivalent circuits',
    authors: ['C de Beer', 'PS Barendse', 'P Pillay', 'B Bullecks', 'R Rengaswamy'],
    venue: 'IEEE Transactions on Industrial Electronics 62 (8), 5265-5274',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Classification%20of%20high-temperature%20PEM%20fuel%20cell%20degradation%20mechanisms%20using%20equivalent%20circuits',
    category: 'Journal'
  },
  {
    id: 'pub67',
    year: 1997,
    title: 'Modelling of microbial growth for sequential utilization in a multisubstrate environment',
    authors: ['P Doshi', 'R Rengaswamy', 'KV Venkatesh'],
    venue: 'Process Biochemistry 32 (8), 643-650',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Modelling%20of%20microbial%20growth%20for%20sequential%20utilization%20in%20a%20multisubstrate%20environment',
    category: 'Journal'
  },
  {
    id: 'pub68',
    year: 2012,
    title: 'Design of a model-based feedback controller for active sorting and synchronization of droplets in a microfluidic loop',
    authors: ['J Maddala', 'B Srinivasan', 'SS Bithi', 'SA Vanapalli', 'R Rengaswamy'],
    venue: 'AIChE journal 58 (7), 2120-2130',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Design%20of%20a%20model-based%20feedback%20controller%20for%20active%20sorting%20and%20synchronization%20of%20droplets%20in%20a%20microfluidic%20loop',
    category: 'Journal'
  },
  {
    id: 'pub69',
    year: 2020,
    title: 'Rapid impedance spectroscopy using dual phase shifted chirp signals for electrochemical applications',
    authors: ['R Suresh', 'S Swaminathan', 'R Rengaswamy'],
    venue: 'International Journal of Hydrogen Energy 45 (17), 10536-10548',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Rapid%20impedance%20spectroscopy%20using%20dual%20phase%20shifted%20chirp%20signals%20for%20electrochemical%20applications',
    category: 'Journal'
  },
  {
    id: 'pub70',
    year: 2005,
    title: 'Step response analysis of phosphoric acid fuel cell (PAFC) cathode through a transient model',
    authors: ['SR Choudhury', 'SR Choudhury', 'J Rangarajan', 'R Rengaswamy'],
    venue: 'Journal of power sources 140 (2), 274-279',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Step%20response%20analysis%20of%20phosphoric%20acid%20fuel%20cell%20%28PAFC%29%20cathode%20through%20a%20transient%20model',
    category: 'Journal'
  },
  {
    id: 'pub71',
    year: 2022,
    title: 'Designing biological circuits: from principles to applications',
    authors: ['D Chakraborty', 'R Rengaswamy', 'K Raman'],
    venue: 'ACS synthetic biology 11 (4), 1377-1388',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Designing%20biological%20circuits%3A%20from%20principles%20to%20applications',
    category: 'Journal'
  },
  {
    id: 'pub72',
    year: 2018,
    title: 'Modeling and control of battery systems. Part II: A model predictive controller for optimal charging',
    authors: ['R Suresh', 'R Rengaswamy'],
    venue: 'Computers & Chemical Engineering 119, 326-335',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Modeling%20and%20control%20of%20battery%20systems.%20Part%20II%3A%20A%20model%20predictive%20controller%20for%20optimal%20charging',
    category: 'Journal'
  },
  {
    id: 'pub73',
    year: 2017,
    title: 'State and parameter estimation in distributed constrained systems. 1. extended Kalman filtering of a special class of differential-algebraic equation systems',
    authors: ['P Mobed', 'S Munusamy', 'D Bhattacharyya', 'R Rengaswamy'],
    venue: 'Industrial & Engineering Chemistry Research 56 (1), 206-215',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=State%20and%20parameter%20estimation%20in%20distributed%20constrained%20systems.%201.%20extended%20Kalman%20filtering%20of%20a%20special%20class%20of%20differential-algebraic%20equation%20systems',
    category: 'Journal'
  },
  {
    id: 'pub74',
    year: 2011,
    title: 'Plant friendly input design: Convex relaxation and quality',
    authors: ['S Narasimhan', 'R Rengaswamy'],
    venue: 'IEEE Transactions on Automatic Control 56 (6), 1467-1472',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Plant%20friendly%20input%20design%3A%20Convex%20relaxation%20and%20quality',
    category: 'Journal'
  },
  {
    id: 'pub75',
    year: 2017,
    title: 'Effects of water induced pore blockage and mitigation strategies in low temperature PEM fuel cells - A simulation study',
    authors: ['S Raman', 'KB Iyeswaria', 'S Narasimhan', 'R Rengaswamy'],
    venue: 'International Journal of Hydrogen Energy 42 (37), 23799-23813',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Effects%20of%20water%20induced%20pore%20blockage%20and%20mitigation%20strategies%20in%20low%20temperature%20PEM%20fuel%20cells%20-%20A%20simulation%20study',
    category: 'Journal'
  },
  {
    id: 'pub76',
    year: 2015,
    title: 'Optimal sensor placement for fault diagnosis using magnitude ratio',
    authors: ['P Mobed', 'J Maddala', 'P Pednekar', 'D Bhattacharyya', 'R Rengaswamy'],
    venue: 'Industrial & Engineering Chemistry Research 54 (38), 9369-9381',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Optimal%20sensor%20placement%20for%20fault%20diagnosis%20using%20magnitude%20ratio',
    category: 'Journal'
  },
  {
    id: 'pub77',
    year: 2015,
    title: 'Multivariate control loop performance assessment with Hurst exponent and Mahalanobis distance',
    authors: ['L Das', 'B Srinivasan', 'R Rengaswamy'],
    venue: 'IEEE Transactions on Control Systems Technology 24 (3), 1067-1074',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Multivariate%20control%20loop%20performance%20assessment%20with%20Hurst%20exponent%20and%20Mahalanobis%20distance',
    category: 'Journal'
  },
  {
    id: 'pub78',
    year: 2011,
    title: 'Multivariable optimization studies of cathode catalyst layer of a polymer electrolyte membrane fuel cell',
    authors: ['M Srinivasarao', 'D Bhattacharyya', 'R Rengaswamy', 'S Narasimhan'],
    venue: 'Chemical engineering research and design 89 (1), 10-22',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Multivariable%20optimization%20studies%20of%20cathode%20catalyst%20layer%20of%20a%20polymer%20electrolyte%20membrane%20fuel%20cell',
    category: 'Journal'
  },
  {
    id: 'pub79',
    year: 2009,
    title: 'Nonlinear state estimation of differential algebraic systems',
    authors: ['RK Mandela', 'R Rengaswamy', 'S Narasimhan'],
    venue: 'IFAC Proceedings Volumes 42 (11), 792-797',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Nonlinear%20state%20estimation%20of%20differential%20algebraic%20systems',
    category: 'Conference'
  },
  {
    id: 'pub80',
    year: 1999,
    title: 'Use of inverse repeat sequence (IRS) for identification in chemical process systems',
    authors: ['R Srinivasan', 'R Rengaswamy'],
    venue: 'Industrial & engineering chemistry research 38 (9), 3420-3429',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Use%20of%20inverse%20repeat%20sequence%20%28IRS%29%20for%20identification%20in%20chemical%20process%20systems',
    category: 'Journal'
  },
  {
    id: 'pub81',
    year: 2022,
    title: 'A computational framework for studying gut-brain axis in autism spectrum disorder',
    authors: ['FK Mohammad', 'MV Palukuri', 'S Shivakumar', 'R Rengaswamy', 'S Sahoo'],
    venue: 'Frontiers in Physiology 13, 760753',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=A%20computational%20framework%20for%20studying%20gut-brain%20axis%20in%20autism%20spectrum%20disorder',
    category: 'Journal'
  },
  {
    id: 'pub82',
    year: 2014,
    title: 'Electrical circuit analysis of CO poisoning in high-temperature PEM fuel cells for fault diagnostics and mitigation',
    authors: ['C De Beer', 'PS Barendse', 'P Pillay', 'B Bullecks', 'R Rengaswamy'],
    venue: 'IEEE Transactions on Industry Applications 51 (1), 619-630',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Electrical%20circuit%20analysis%20of%20CO%20poisoning%20in%20high-temperature%20PEM%20fuel%20cells%20for%20fault%20diagnostics%20and%20mitigation',
    category: 'Journal'
  },
  {
    id: 'pub83',
    year: 2018,
    title: 'Actuator network design to mitigate contamination effects in water distribution networks',
    authors: ['VR Palleti', 'V Kurian', 'S Narasimhan', 'R Rengaswamy'],
    venue: 'Computers & Chemical Engineering 108, 194-205',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Actuator%20network%20design%20to%20mitigate%20contamination%20effects%20in%20water%20distribution%20networks',
    category: 'Journal'
  },
  {
    id: 'pub84',
    year: 2022,
    title: 'CDiNN - convex difference neural networks',
    authors: ['P Sankaranarayanan', 'R Rengaswamy'],
    venue: 'Neurocomputing 495, 153-168',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=CDiNN%20-%20convex%20difference%20neural%20networks',
    category: 'Journal'
  },
  {
    id: 'pub85',
    year: 2019,
    title: 'Feasibility studies of micro photosynthetic power cells as a competitor of photovoltaic cells for low and ultra-low power IoT applications',
    authors: ['HK Tanneru', 'K Kuruvinashetti', 'P Pillay', 'R Rengaswamy', 'M Packirisamy'],
    venue: 'Energies 12 (9), 1595',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Feasibility%20studies%20of%20micro%20photosynthetic%20power%20cells%20as%20a%20competitor%20of%20photovoltaic%20cells%20for%20low%20and%20ultra-low%20power%20IoT%20applications',
    category: 'Journal'
  },
  {
    id: 'pub86',
    year: 2013,
    title: 'A new cluster validity index for fuzzy clustering',
    authors: ['S Joopudi', 'SS Rathi', 'S Narasimhan', 'R Rengaswamy'],
    venue: 'IFAC Proceedings Volumes 46 (32), 325-330',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=A%20new%20cluster%20validity%20index%20for%20fuzzy%20clustering',
    category: 'Conference'
  },
  {
    id: 'pub87',
    year: 2013,
    title: 'Droplet digital signal generation in microfluidic networks using model predictive control',
    authors: ['J Maddala', 'R Rengaswamy'],
    venue: 'Journal of Process Control 23 (2), 132-139',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Droplet%20digital%20signal%20generation%20in%20microfluidic%20networks%20using%20model%20predictive%20control',
    category: 'Journal'
  },
  {
    id: 'pub88',
    year: 2001,
    title: 'A novel interval-halving algorithm for process trend identification',
    authors: ['S Dash', 'R Rengaswamy', 'V Venkatasubramanian'],
    venue: 'IFAC Proceedings Volumes 34 (27), 155-160',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=A%20novel%20interval-halving%20algorithm%20for%20process%20trend%20identification',
    category: 'Conference'
  },
  {
    id: 'pub89',
    year: 2022,
    title: 'Data science and IoT based mobile monitoring framework for hyper-local PM2.5 assessment in urban setting',
    authors: ['S Swaminathan', 'AVS Guntuku', 'A Gupta', 'R Rengaswamy'],
    venue: 'Building and environment 225, 109597',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Data%20science%20and%20IoT%20based%20mobile%20monitoring%20framework%20for%20hyper-local%20PM2.5%20assessment%20in%20urban%20setting',
    category: 'Journal'
  },
  {
    id: 'pub90',
    year: 2013,
    title: 'Traffic of pairs of drops in microfluidic ladder networks with fore-aft structural asymmetry',
    authors: ['J Maddala', 'WS Wang', 'SA Vanapalli', 'R Rengaswamy'],
    venue: 'Microfluidics and nanofluidics 14 (1), 337-344',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Traffic%20of%20pairs%20of%20drops%20in%20microfluidic%20ladder%20networks%20with%20fore-aft%20structural%20asymmetry',
    category: 'Journal'
  },
  {
    id: 'pub91',
    year: 2012,
    title: 'Root cause analysis of linear closed-loop oscillatory chemical process systems',
    authors: ['S Babji', 'U Nallasivam', 'R Rengaswamy'],
    venue: 'Industrial & engineering chemistry research 51 (42), 13712-13731',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Root%20cause%20analysis%20of%20linear%20closed-loop%20oscillatory%20chemical%20process%20systems',
    category: 'Journal'
  },
  {
    id: 'pub92',
    year: 2010,
    title: 'Stiction identification in nonlinear process control loops',
    authors: ['U Nallasivam', 'S Babji', 'R Rengaswamy'],
    venue: 'Computers & Chemical Engineering 34 (11), 1890-1898',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Stiction%20identification%20in%20nonlinear%20process%20control%20loops',
    category: 'Journal'
  },
  {
    id: 'pub93',
    year: 2007,
    title: 'Quantification of performance of sensor networks for fault diagnosis',
    authors: ['S Narasimhan', 'R Rengaswamy'],
    venue: 'AIChE journal 53 (4), 902-917',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Quantification%20of%20performance%20of%20sensor%20networks%20for%20fault%20diagnosis',
    category: 'Journal'
  },
  {
    id: 'pub94',
    year: 2019,
    title: 'Optimal power distribution control for a network of fuel cell stacks',
    authors: ['R Suresh', 'G Sankaran', 'S Joopudi', 'SR Choudhury', 'S Narasimhan'],
    venue: 'Journal of Process Control 74, 88-98',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Optimal%20power%20distribution%20control%20for%20a%20network%20of%20fuel%20cell%20stacks',
    category: 'Journal'
  },
  {
    id: 'pub95',
    year: 2017,
    title: 'Data mining and control loop performance assessment: The multivariate case',
    authors: ['L Das', 'R Rengaswamy', 'B Srinivasan'],
    venue: 'AIChE Journal 63 (8), 3311-3328',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Data%20mining%20and%20control%20loop%20performance%20assessment%3A%20The%20multivariate%20case',
    category: 'Journal'
  },
  {
    id: 'pub96',
    year: 2016,
    title: 'Development of a hybrid shrinking-core shrinking-particle model for entrained-flow gasifiers',
    authors: ['P Pednekar', 'D Bhattacharyya', 'JS Kasule', 'R Turton', 'R Rengaswamy'],
    venue: 'AIChE Journal 62 (3), 659-669',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Development%20of%20a%20hybrid%20shrinking-core%20shrinking-particle%20model%20for%20entrained-flow%20gasifiers',
    category: 'Journal'
  },
  {
    id: 'pub97',
    year: 2014,
    title: 'Design of multi-functional microfluidic ladder networks to passively control droplet spacing using genetic algorithms',
    authors: ['J Maddala', 'R Rengaswamy'],
    venue: 'Computers & chemical engineering 60, 413-425',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Design%20of%20multi-functional%20microfluidic%20ladder%20networks%20to%20passively%20control%20droplet%20spacing%20using%20genetic%20algorithms',
    category: 'Journal'
  },
  {
    id: 'pub98',
    year: 2016,
    title: 'Dynamic model of a slagging entrained-flow gasifier including models of slag transport, deposition, and slag layer',
    authors: ['P Pednekar', 'D Bhattacharyya', 'JS Kasule', 'R Turton', 'R Rengaswamy'],
    venue: 'Industrial & Engineering Chemistry Research 55 (1), 279-292',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Dynamic%20model%20of%20a%20slagging%20entrained-flow%20gasifier%20including%20models%20of%20slag%20transport%2C%20deposition%2C%20and%20slag%20layer',
    category: 'Journal'
  },
  {
    id: 'pub99',
    year: 1992,
    title: 'An integrated framework for process monitoring, diagnosis, and control using knowledge-based systems and neural networks',
    authors: ['R Rengaswamy', 'V Venkatasubramanian'],
    venue: 'IFAC Proceedings Volumes 25 (4), 49-54',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=An%20integrated%20framework%20for%20process%20monitoring%2C%20diagnosis%2C%20and%20control%20using%20knowledge-based%20systems%20and%20neural%20networks',
    category: 'Conference'
  },
  {
    id: 'pub100',
    year: 2019,
    title: 'Perspective - micro photosynthetic power cells',
    authors: ['HK Tanneru', 'K Kuruvinashetti', 'P Pillay', 'R Rengaswamy', 'M Packirisamy'],
    venue: 'Journal of the Electrochemical Society 166 (9), B3012-B3016',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Perspective%20-%20micro%20photosynthetic%20power%20cells',
    category: 'Journal'
  },
  {
    id: 'pub101',
    year: 2014,
    title: 'Data reconciliation and dynamic modeling of a sour water gas shift reactor',
    authors: ['P Mobed', 'J Maddala', 'R Rengaswamy', 'D Bhattacharyya', 'R Turton'],
    venue: 'Industrial & Engineering Chemistry Research 53 (51), 19855-19869',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Data%20reconciliation%20and%20dynamic%20modeling%20of%20a%20sour%20water%20gas%20shift%20reactor',
    category: 'Journal'
  },
  {
    id: 'pub102',
    year: 2014,
    title: 'Online diagnostics of HTPEM fuel cells using small amplitude transient analysis for CO poisoning',
    authors: ['C de Beer', 'PS Barendse', 'P Pillay', 'B Bullecks', 'R Rengaswamy'],
    venue: 'IEEE Transactions on Industrial Electronics 62 (8), 5175-5186',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Online%20diagnostics%20of%20HTPEM%20fuel%20cells%20using%20small%20amplitude%20transient%20analysis%20for%20CO%20poisoning',
    category: 'Journal'
  },
  {
    id: 'pub103',
    year: 2010,
    title: 'Parametric study of the cathode and the role of liquid saturation on the performance of a polymer electrolyte membrane fuel cell - A numerical approach',
    authors: ['M Srinivasarao', 'D Bhattacharyya', 'R Rengaswamy', 'S Narasimhan'],
    venue: 'Journal of Power Sources 195 (19), 6782-6794',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Parametric%20study%20of%20the%20cathode%20and%20the%20role%20of%20liquid%20saturation%20on%20the%20performance%20of%20a%20polymer%20electrolyte%20membrane%20fuel%20cell%20-%20A%20numerical%20approach',
    category: 'Journal'
  },
  {
    id: 'pub104',
    year: 2010,
    title: 'Achieving resilience in critical infrastructures: A case study for a nuclear power plant cooling loop',
    authors: ['K Villez', 'V Venkatasubramanian', 'H Garcia', 'C Rieger', 'T Spinner'],
    venue: '2010 3rd International Symposium on Resilient Control Systems, 49-52',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Achieving%20resilience%20in%20critical%20infrastructures%3A%20A%20case%20study%20for%20a%20nuclear%20power%20plant%20cooling%20loop',
    category: 'Conference'
  },
  {
    id: 'pub105',
    year: 2006,
    title: 'Characterization and fault diagnosis of PAFC cathode by EIS technique and a novel mathematical model approach',
    authors: ['SR Choudhury', 'R Rengaswamy'],
    venue: 'Journal of power sources 161 (2), 971-986',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Characterization%20and%20fault%20diagnosis%20of%20PAFC%20cathode%20by%20EIS%20technique%20and%20a%20novel%20mathematical%20model%20approach',
    category: 'Journal'
  },
  {
    id: 'pub106',
    year: 2022,
    title: 'Reinforcement-Learning designs droplet microfluidic networks',
    authors: ['M Shahab', 'R Rengaswamy'],
    venue: 'Computers & Chemical Engineering 161, 107787',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Reinforcement-Learning%20designs%20droplet%20microfluidic%20networks',
    category: 'Journal'
  },
  {
    id: 'pub107',
    year: 2016,
    title: 'A novel framework for integrating data mining with control loop performance assessment',
    authors: ['L Das', 'B Srinivasan', 'R Rengaswamy'],
    venue: 'AIChE Journal 62 (1), 146-165',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=A%20novel%20framework%20for%20integrating%20data%20mining%20with%20control%20loop%20performance%20assessment',
    category: 'Journal'
  },
  {
    id: 'pub108',
    year: 2010,
    title: 'Control of proton exchange membrane fuel cells using data driven state space models',
    authors: ['RN Methekar', 'SC Patwardhan', 'R Rengaswamy', 'RD Gudi', 'V Prasad'],
    venue: 'Chemical Engineering Research and Design 88 (7), 861-874',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Control%20of%20proton%20exchange%20membrane%20fuel%20cells%20using%20data%20driven%20state%20space%20models',
    category: 'Journal'
  },
  {
    id: 'pub109',
    year: 2008,
    title: 'Multi-objective optimal input design for plant friendly identification',
    authors: ['S Narasimhan', 'R Rengaswamy'],
    venue: '2008 American Control Conference, 1304-1309',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Multi-objective%20optimal%20input%20design%20for%20plant%20friendly%20identification',
    category: 'Conference'
  },
  {
    id: 'pub110',
    year: 2004,
    title: 'Industrial experience with object-oriented modelling: FCC case study',
    authors: ['RM Rao', 'R Rengaswamy', 'AK Suresh', 'KS Balaraman'],
    venue: 'Chemical Engineering Research and Design 82 (4), 527-552',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Industrial%20experience%20with%20object-oriented%20modelling%3A%20FCC%20case%20study',
    category: 'Journal'
  },
  {
    id: 'pub111',
    year: 2016,
    title: 'Very large scale droplet microfluidic integration (VLDMI) using genetic algorithm',
    authors: ['JS Kasule', 'J Maddala', 'P Mobed', 'R Rengaswamy'],
    venue: 'Computers & Chemical Engineering 85, 94-104',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Very%20large%20scale%20droplet%20microfluidic%20integration%20%28VLDMI%29%20using%20genetic%20algorithm',
    category: 'Journal'
  },
  {
    id: 'pub112',
    year: 2008,
    title: 'Blind identification of stiction in nonlinear process control loops',
    authors: ['N Ulaganathan', 'R Rengaswamy'],
    venue: '2008 American Control Conference, 3380-3384',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Blind%20identification%20of%20stiction%20in%20nonlinear%20process%20control%20loops',
    category: 'Conference'
  },
  {
    id: 'pub113',
    year: 2003,
    title: 'Multi-objective input signal design for plant-friendly identification',
    authors: ['S Narasimhan', 'R Srinivasan', 'R Rengaswamy'],
    venue: 'IFAC Proceedings Volumes 36 (16), 897-902',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Multi-objective%20input%20signal%20design%20for%20plant-friendly%20identification',
    category: 'Conference'
  },
  {
    id: 'pub114',
    year: 2022,
    title: 'Phosphoric acid fuel cells',
    authors: ['AC Bhosale', 'SR Suseendiran', 'R Ramya', 'SR Choudhury', 'R Rengaswamy'],
    venue: 'Elsevier',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Phosphoric%20acid%20fuel%20cells',
    category: 'Journal'
  },
  {
    id: 'pub115',
    year: 2021,
    title: 'Spacing optimization for active droplet sorting in microfluidic networks using genetic algorithm',
    authors: ['EM Arun Sankar', 'M Shahab', 'R Rengaswamy'],
    venue: 'Industrial & Engineering Chemistry Research 60 (4), 1699-1708',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Spacing%20optimization%20for%20active%20droplet%20sorting%20in%20microfluidic%20networks%20using%20genetic%20algorithm',
    category: 'Journal'
  },
  {
    id: 'pub116',
    year: 2014,
    title: 'Origin of periodic and chaotic dynamics due to drops moving in a microfluidic loop device',
    authors: ['J Maddala', 'SA Vanapalli', 'R Rengaswamy'],
    venue: 'Physical Review E 89 (2), 023015',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Origin%20of%20periodic%20and%20chaotic%20dynamics%20due%20to%20drops%20moving%20in%20a%20microfluidic%20loop%20device',
    category: 'Journal'
  },
  {
    id: 'pub117',
    year: 2010,
    title: 'Dimensional optimization of a tubular solid oxide fuel cell',
    authors: ['D Bhattacharyya', 'R Rengaswamy'],
    venue: 'Computers & Chemical Engineering 34 (11), 1789-1802',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Dimensional%20optimization%20of%20a%20tubular%20solid%20oxide%20fuel%20cell',
    category: 'Journal'
  },
  {
    id: 'pub118',
    year: 2006,
    title: 'Integrating stiction diagnosis and stiction compensation in process control valves',
    authors: ['R Srinivasan', 'R Rengaswamy'],
    venue: 'Computer Aided Chemical Engineering 21, 1233-1238',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Integrating%20stiction%20diagnosis%20and%20stiction%20compensation%20in%20process%20control%20valves',
    category: 'Journal'
  },
  {
    id: 'pub119',
    year: 2004,
    title: 'Multi-objective input signal design for plant friendly identification of process systems',
    authors: ['S Narasimhan', 'R Rengaswamy'],
    venue: 'Proceedings of the 2004 American Control Conference 6, 4891-4896',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Multi-objective%20input%20signal%20design%20for%20plant%20friendly%20identification%20of%20process%20systems',
    category: 'Conference'
  },
  {
    id: 'pub120',
    year: 2016,
    title: 'Modeling of rechargeable batteries',
    authors: ['R Suresh', 'HK Tanneru', 'R Rengaswamy'],
    venue: 'Current Opinion in Chemical Engineering 13, 63-74',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Modeling%20of%20rechargeable%20batteries',
    category: 'Journal'
  },
  {
    id: 'pub121',
    year: 2015,
    title: 'An integrated approach for oscillation diagnosis in linear closed loop systems',
    authors: ['B Srinivasan', 'U Nallasivam', 'R Rengaswamy'],
    venue: 'Chemical Engineering Research and Design 93, 483-495',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=An%20integrated%20approach%20for%20oscillation%20diagnosis%20in%20linear%20closed%20loop%20systems',
    category: 'Journal'
  },
  {
    id: 'pub122',
    year: 2018,
    title: 'Modeling and control of battery systems. Part I: Revisiting Butler-Volmer equations to model non-linear coupling of various capacity fade mechanisms',
    authors: ['R Suresh', 'R Rengaswamy'],
    venue: 'Computers & Chemical Engineering 119, 336-351',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Modeling%20and%20control%20of%20battery%20systems.%20Part%20I%3A%20Revisiting%20Butler-Volmer%20equations%20to%20model%20non-linear%20coupling%20of%20various%20capacity%20fade%20mechanisms',
    category: 'Journal'
  },
  {
    id: 'pub123',
    year: 2015,
    title: 'On-line performance monitoring of PEM fuel cell using a fast EIS approach',
    authors: ['L Das', 'B Srinivasan', 'R Rengaswamy'],
    venue: '2015 American Control Conference (ACC), 1611-1616',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=On-line%20performance%20monitoring%20of%20PEM%20fuel%20cell%20using%20a%20fast%20EIS%20approach',
    category: 'Conference'
  },
  {
    id: 'pub124',
    year: 2013,
    title: 'A generative approach to qualitative trend analysis for batch process fault diagnosis',
    authors: ['K Villez', 'R Rengaswamy'],
    venue: '2013 European Control Conference (ECC), 1958-1963',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=A%20generative%20approach%20to%20qualitative%20trend%20analysis%20for%20batch%20process%20fault%20diagnosis',
    category: 'Conference'
  },
  {
    id: 'pub125',
    year: 2009,
    title: 'Structural properties of gene regulatory networks: definitions and connections',
    authors: ['S Narasimhan', 'R Rengaswamy', 'R Vadigepalli'],
    venue: 'IEEE/ACM Transactions on Computational Biology and Bioinformatics 6 (1), 158-170',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Structural%20properties%20of%20gene%20regulatory%20networks%3A%20definitions%20and%20connections',
    category: 'Journal'
  },
  {
    id: 'pub126',
    year: 2022,
    title: 'Novel ratio-metric features enable the identification of new driver genes across cancer types',
    authors: ['M Sudhakar', 'R Rengaswamy', 'K Raman'],
    venue: 'Scientific Reports 12 (1), 5',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Novel%20ratio-metric%20features%20enable%20the%20identification%20of%20new%20driver%20genes%20across%20cancer%20types',
    category: 'Journal'
  },
  {
    id: 'pub127',
    year: 2021,
    title: 'A systems engineering perspective on electrochemical energy technologies and a framework for application driven choice of technology',
    authors: ['DE Eapen', 'R Suresh', 'S Patil', 'R Rengaswamy'],
    venue: 'Renewable and Sustainable Energy Reviews 147, 111165',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=A%20systems%20engineering%20perspective%20on%20electrochemical%20energy%20technologies%20and%20a%20framework%20for%20application%20driven%20choice%20of%20technology',
    category: 'Journal'
  },
  {
    id: 'pub128',
    year: 2020,
    title: 'Sensor network design based on system-wide reliability criteria. Part II: Formulations and applications',
    authors: ['O Prakash', 'M Bhushan', 'S Narasimhan', 'R Rengaswamy'],
    venue: 'Journal of Process Control 93, 14-27',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Sensor%20network%20design%20based%20on%20system-wide%20reliability%20criteria.%20Part%20II%3A%20Formulations%20and%20applications',
    category: 'Journal'
  },
  {
    id: 'pub129',
    year: 2021,
    title: 'Comparison of first trimester dating methods for gestational age estimation and their implication on preterm birth classification in a North Indian cohort',
    authors: ['R Vijayram', 'N Damaraju', 'A Xavier', 'BK Desiraju', 'R Thiruvengadam'],
    venue: 'BMC pregnancy and childbirth 21 (1), 343',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Comparison%20of%20first%20trimester%20dating%20methods%20for%20gestational%20age%20estimation%20and%20their%20implication%20on%20preterm%20birth%20classification%20in%20a%20North%20Indian%20cohort',
    category: 'Journal'
  },
  {
    id: 'pub130',
    year: 2020,
    title: 'Sensor network design based on system-wide reliability criteria. Part I: Objectives',
    authors: ['O Prakash', 'M Bhushan', 'S Narasimhan', 'R Rengaswamy'],
    venue: 'Journal of Process Control 93, 66-82',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Sensor%20network%20design%20based%20on%20system-wide%20reliability%20criteria.%20Part%20I%3A%20Objectives',
    category: 'Journal'
  },
  {
    id: 'pub131',
    year: 2011,
    title: 'Optimal plant friendly input design for system identification',
    authors: ['S Narasimhan', 'SA Srikanth', 'JVN Sreeram', 'R Rengaswamy'],
    venue: 'Industrial & engineering chemistry research 50 (23), 13045-13055',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Optimal%20plant%20friendly%20input%20design%20for%20system%20identification',
    category: 'Journal'
  },
  {
    id: 'pub132',
    year: 2011,
    title: 'Computationally efficient identification of global ARX parameters with guaranteed stability',
    authors: ['U Nallasivam', 'B Srinivasan', 'V Kuppuraj', 'MN Karim', 'R Rengaswamy'],
    venue: 'IEEE transactions on automatic control 56 (6), 1406-1411',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Computationally%20efficient%20identification%20of%20global%20ARX%20parameters%20with%20guaranteed%20stability',
    category: 'Journal'
  },
  {
    id: 'pub133',
    year: 2009,
    title: 'Transport, sensitivity, and dimensional optimization studies of a tubular Solid Oxide Fuel Cell',
    authors: ['D Bhattacharyya', 'R Rengaswamy'],
    venue: 'Journal of Power Sources 190 (2), 499-510',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Transport%2C%20sensitivity%2C%20and%20dimensional%20optimization%20studies%20of%20a%20tubular%20Solid%20Oxide%20Fuel%20Cell',
    category: 'Journal'
  },
  {
    id: 'pub134',
    year: 2006,
    title: 'Isothermal isobaric reactive flash problem',
    authors: ['G Ruiz', 'LN Sridhar', 'R Rengaswamy'],
    venue: 'Industrial & engineering chemistry research 45 (19), 6548-6554',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Isothermal%20isobaric%20reactive%20flash%20problem',
    category: 'Journal'
  },
  {
    id: 'pub135',
    year: 2019,
    title: 'Prediction error-based clustering approach for multiple-model learning using statistical testing',
    authors: ['S Chinta', 'A Sivaram', 'R Rengaswamy'],
    venue: 'Engineering Applications of Artificial Intelligence 77, 125-135',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Prediction%20error-based%20clustering%20approach%20for%20multiple-model%20learning%20using%20statistical%20testing',
    category: 'Journal'
  },
  {
    id: 'pub136',
    year: 2024,
    title: 'Discovering governing partial differential equations from noisy data',
    authors: ['N Joemon', 'M Pradeep', 'LK Rajulapati', 'R Rengaswamy'],
    venue: 'Computers & Chemical Engineering 180, 108480',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Discovering%20governing%20partial%20differential%20equations%20from%20noisy%20data',
    category: 'Journal'
  },
  {
    id: 'pub137',
    year: 2016,
    title: 'Micro photosynthetic cell for power generation from algae: Bio-electrochemical modeling and verification',
    authors: ['HK Tanneru', 'R Suresh', 'AV Ramanan', 'S Mehdi', 'M Packirisamy', 'P Pillay'],
    venue: 'Technology 4 (04), 249-258',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Micro%20photosynthetic%20cell%20for%20power%20generation%20from%20algae%3A%20Bio-electrochemical%20modeling%20and%20verification',
    category: 'Journal'
  },
  {
    id: 'pub138',
    year: 2007,
    title: 'An integrated qualitative-quantitative hypothesis driven approach for comprehensive fault diagnosis',
    authors: ['P Vachhani', 'S Narasimhan', 'R Rengaswamy'],
    venue: 'Chemical Engineering Research and Design 85 (9), 1281-1294',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=An%20integrated%20qualitative-quantitative%20hypothesis%20driven%20approach%20for%20comprehensive%20fault%20diagnosis',
    category: 'Journal'
  },
  {
    id: 'pub139',
    year: 2022,
    title: 'Multi-omic data improve prediction of personalized tumor suppressors and oncogenes',
    authors: ['M Sudhakar', 'R Rengaswamy', 'K Raman'],
    venue: 'Frontiers in Genetics 13, 854190',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Multi-omic%20data%20improve%20prediction%20of%20personalized%20tumor%20suppressors%20and%20oncogenes',
    category: 'Journal'
  },
  {
    id: 'pub140',
    year: 2019,
    title: 'Entrainment of superoxide rhythm by menadione in HCT116 colon cancer cells',
    authors: ['U Kizhuveetil', 'MV Palukuri', 'P Sharma', 'D Karunagaran', 'R Rengaswamy'],
    venue: 'Scientific Reports 9 (1), 3347',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Entrainment%20of%20superoxide%20rhythm%20by%20menadione%20in%20HCT116%20colon%20cancer%20cells',
    category: 'Journal'
  },
  {
    id: 'pub141',
    year: 2015,
    title: 'A new measure to improve the reliability of stiction detection techniques',
    authors: ['B Srinivasan', 'T Spinner', 'R Rengaswamy'],
    venue: 'Industrial & Engineering Chemistry Research 54 (30), 7476-7488',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=A%20new%20measure%20to%20improve%20the%20reliability%20of%20stiction%20detection%20techniques',
    category: 'Journal'
  },
  {
    id: 'pub142',
    year: 2014,
    title: 'Understanding drop-pattern formation in 2-D microchannels: a multi-agent approach',
    authors: ['M Danny Raj', 'R Rengaswamy'],
    venue: 'Microfluidics and nanofluidics 17 (3), 527-537',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Understanding%20drop-pattern%20formation%20in%202-D%20microchannels%3A%20a%20multi-agent%20approach',
    category: 'Journal'
  },
  {
    id: 'pub143',
    year: 2011,
    title: 'Diagnosis of root cause for oscillations in closed-loop chemical process systems',
    authors: ['B Srinivasan', 'U Nallasivam', 'R Rengaswamy'],
    venue: 'IFAC Proceedings Volumes 44 (1), 13145-13150',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Diagnosis%20of%20root%20cause%20for%20oscillations%20in%20closed-loop%20chemical%20process%20systems',
    category: 'Conference'
  },
  {
    id: 'pub144',
    year: 2023,
    title: 'Perovskite-based electrocatalyst discovery and design using word embeddings from retrained SciBERT language model',
    authors: ['A Muthukkumaran', 'S Raghunathan', 'A Ravichandran', 'R Rengaswamy'],
    venue: 'AIChE Journal 69 (7), e18068',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Perovskite-based%20electrocatalyst%20discovery%20and%20design%20using%20word%20embeddings%20from%20retrained%20SciBERT%20language%20model',
    category: 'Journal'
  },
  {
    id: 'pub145',
    year: 2021,
    title: 'Effect of gas pressure and clamping pressure on interfacial contact resistance of a cylindrical polymer electrolyte membrane fuel cell',
    authors: ['AC Bhosale', 'SR Suseendiran', 'K Rokhade', 'R Rengaswamy'],
    venue: 'International Journal of Sustainable Engineering 14 (6), 1791-1799',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Effect%20of%20gas%20pressure%20and%20clamping%20pressure%20on%20interfacial%20contact%20resistance%20of%20a%20cylindrical%20polymer%20electrolyte%20membrane%20fuel%20cell',
    category: 'Journal'
  },
  {
    id: 'pub146',
    year: 2019,
    title: 'On developing a framework for detection of oscillations in data',
    authors: ['MF Ullah', 'L Das', 'S Parmar', 'R Rengaswamy', 'B Srinivasan'],
    venue: 'ISA transactions 89, 96-112',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=On%20developing%20a%20framework%20for%20detection%20of%20oscillations%20in%20data',
    category: 'Journal'
  },
  {
    id: 'pub147',
    year: 2017,
    title: 'Strategies for effective utilization of hydrogen in cylindrical PEM fuel cells',
    authors: ['SR Suseendiran', 'S Pearn-Rowe', 'R Rengaswamy'],
    venue: 'Electrochemical Society Transactions 80 (8), 485-496',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Strategies%20for%20effective%20utilization%20of%20hydrogen%20in%20cylindrical%20PEM%20fuel%20cells',
    category: 'Journal'
  },
  {
    id: 'pub148',
    year: 2017,
    title: 'State and parameter estimation in distributed constrained systems. 2. GA-EKF based sensor placement for a water gas shift reactor',
    authors: ['P Mobed', 'S Munusamy', 'D Bhattacharyya', 'R Rengaswamy'],
    venue: 'Industrial & Engineering Chemistry Research 56 (1), 216-224',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=State%20and%20parameter%20estimation%20in%20distributed%20constrained%20systems.%202.%20GA-EKF%20based%20sensor%20placement%20for%20a%20water%20gas%20shift%20reactor',
    category: 'Journal'
  },
  {
    id: 'pub149',
    year: 2016,
    title: 'Coalescence of drops in a 2D microchannel: critical transitions to autocatalytic behaviour',
    authors: ['MD Raj', 'R Rengaswamy'],
    venue: 'Soft Matter 12 (1), 115-122',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Coalescence%20of%20drops%20in%20a%202D%20microchannel%3A%20critical%20transitions%20to%20autocatalytic%20behaviour',
    category: 'Journal'
  },
  {
    id: 'pub150',
    year: 2022,
    title: 'Droplet microfluidic networks as hybrid dynamical systems: Inlet spacing optimization for sorting of drops',
    authors: ['A Sankar EM', 'R Rengaswamy'],
    venue: 'AIChE Journal 68 (6), e17633',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Droplet%20microfluidic%20networks%20as%20hybrid%20dynamical%20systems%3A%20Inlet%20spacing%20optimization%20for%20sorting%20of%20drops',
    category: 'Journal'
  },
  {
    id: 'pub151',
    year: 2021,
    title: 'Data-driven prognostics for Lithium-ion battery health monitoring',
    authors: ['G Sukanya', 'R Suresh', 'R Rengaswamy'],
    venue: 'Computer Aided Chemical Engineering 50, 487-492',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Data-driven%20prognostics%20for%20Lithium-ion%20battery%20health%20monitoring',
    category: 'Journal'
  },
  {
    id: 'pub152',
    year: 2017,
    title: 'On modeling and optimization of micro-photosynthetic power cells',
    authors: ['HK Tanneru', 'R Suresh', 'R Rengaswamy'],
    venue: 'Computers & Chemical Engineering 107, 284-293',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=On%20modeling%20and%20optimization%20of%20micro-photosynthetic%20power%20cells',
    category: 'Journal'
  },
  {
    id: 'pub153',
    year: 2024,
    title: 'User authentication system based on human exhaled breath physics',
    authors: ['M Karunanethy', 'R Tripathi', 'MV Panchagnula', 'R Rengaswamy'],
    venue: 'Plos one 19 (4), e0301971',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=User%20authentication%20system%20based%20on%20human%20exhaled%20breath%20physics',
    category: 'Journal'
  },
  {
    id: 'pub154',
    year: 2019,
    title: 'On the role of hydrodynamic interactions in the engineered-assembly of droplet ensembles',
    authors: ['M Danny Raj', 'A Gnanasekaran', 'R Rengaswamy'],
    venue: 'Soft Matter 15 (39), 7863-7875',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=On%20the%20role%20of%20hydrodynamic%20interactions%20in%20the%20engineered-assembly%20of%20droplet%20ensembles',
    category: 'Journal'
  },
  {
    id: 'pub155',
    year: 2012,
    title: 'Modeling studies of a cylindrical polymer electrolyte membrane fuel cell cathode',
    authors: ['S Modekurti', 'B Bullecks', 'D Bhattacharyya', 'R Rengaswamy'],
    venue: 'Industrial & engineering chemistry research 51 (13), 5003-5010',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Modeling%20studies%20of%20a%20cylindrical%20polymer%20electrolyte%20membrane%20fuel%20cell%20cathode',
    category: 'Journal'
  },
  {
    id: 'pub156',
    year: 2022,
    title: 'Data Science for Engineers',
    authors: ['R Rengaswamy', 'R Suresh'],
    venue: 'CRC Press',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Data%20Science%20for%20Engineers',
    category: 'Journal'
  },
  {
    id: 'pub157',
    year: 2019,
    title: 'Interacting coalescence avalanches in a 2D droplet assembly',
    authors: ['M Danny Raj', 'R Rengaswamy'],
    venue: 'AIChE Journal 65 (3), 1111-1118',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Interacting%20coalescence%20avalanches%20in%20a%202D%20droplet%20assembly',
    category: 'Journal'
  },
  {
    id: 'pub158',
    year: 2016,
    title: 'Optimal back-off point determination and controller weight selection for multivariate systems under finite-horizon control',
    authors: ['T Spinner', 'B Srinivasan', 'R Rengaswamy'],
    venue: 'Journal of Process Control 40, 134-145',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Optimal%20back-off%20point%20determination%20and%20controller%20weight%20selection%20for%20multivariate%20systems%20under%20finite-horizon%20control',
    category: 'Journal'
  },
  {
    id: 'pub159',
    year: 2015,
    title: 'Investigating Arrangement of Composite Drops in Two-Dimensional Microchannels Using Multiagent Simulations: A Design Perspective',
    authors: ['MD Raj', 'R Rengaswamy'],
    venue: 'Industrial & Engineering Chemistry Research 54 (43), 10835-10842',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Investigating%20Arrangement%20of%20Composite%20Drops%20in%20Two-Dimensional%20Microchannels%20Using%20Multiagent%20Simulations%3A%20A%20Design%20Perspective',
    category: 'Journal'
  },
  {
    id: 'pub160',
    year: 2024,
    title: 'Design of microfluidic chromatographs through reinforcement learning',
    authors: ['M Shahab', 'R Rengaswamy'],
    venue: 'Digital Chemical Engineering 10, 100141',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Design%20of%20microfluidic%20chromatographs%20through%20reinforcement%20learning',
    category: 'Journal'
  },
  {
    id: 'pub161',
    year: 2022,
    title: 'Lithium-air battery electrocatalyst identification using Machine Learning and SciBERT word embeddings',
    authors: ['A Muthukkumaran', 'A Ravichandran', 'S Shanbhag', 'R Arjun'],
    venue: 'Computer Aided Chemical Engineering 51, 1429-1434',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Lithium-air%20battery%20electrocatalyst%20identification%20using%20Machine%20Learning%20and%20SciBERT%20word%20embeddings',
    category: 'Journal'
  },
  {
    id: 'pub162',
    year: 2020,
    title: 'Process control fundamentals: analysis, design, assessment, and diagnosis',
    authors: ['R Rengaswamy', 'B Srinivasan', 'NP Bhatt'],
    venue: 'CRC Press',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Process%20control%20fundamentals%3A%20analysis%2C%20design%2C%20assessment%2C%20and%20diagnosis',
    category: 'Journal'
  },
  {
    id: 'pub163',
    year: 2018,
    title: 'A novel approach for benchmarking and assessing the performance of state estimators',
    authors: ['L Das', 'G Kumar', 'R Rengaswamy', 'B Srinivasan'],
    venue: 'ISA transactions 80, 137-145',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=A%20novel%20approach%20for%20benchmarking%20and%20assessing%20the%20performance%20of%20state%20estimators',
    category: 'Journal'
  },
  {
    id: 'pub164',
    year: 2017,
    title: 'Averaged model for probabilistic coalescence avalanches in two-dimensional emulsions: Insights into uncertainty propagation',
    authors: ['M Danny Raj', 'R Rengaswamy'],
    venue: 'Physical Review E 95 (3), 032608',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Averaged%20model%20for%20probabilistic%20coalescence%20avalanches%20in%20two-dimensional%20emulsions%3A%20Insights%20into%20uncertainty%20propagation',
    category: 'Journal'
  },
  {
    id: 'pub165',
    year: 2006,
    title: 'Root cause analysis of oscillating control loops',
    authors: ['R Srinivasan', 'MR Maurya', 'R Rengaswamy'],
    venue: 'IFAC Proceedings Volumes 39 (2), 1151-1156',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Root%20cause%20analysis%20of%20oscillating%20control%20loops',
    category: 'Conference'
  },
  {
    id: 'pub166',
    year: 2004,
    title: 'Lexicographic optimization based sensor network design for Robust fault diagnosis',
    authors: ['M Bhushan', 'R Rengaswamy'],
    venue: 'IFAC Proceedings Volumes 37 (9), 215-220',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Lexicographic%20optimization%20based%20sensor%20network%20design%20for%20Robust%20fault%20diagnosis',
    category: 'Conference'
  },
  {
    id: 'pub167',
    year: 2003,
    title: 'Consistent malfunction diagnosis inside control loops using signed directed graphs',
    authors: ['MR Maurya', 'R Rengaswamy', 'V Venkatasubramanian'],
    venue: 'Computer Aided Chemical Engineering 14, 473-478',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Consistent%20malfunction%20diagnosis%20inside%20control%20loops%20using%20signed%20directed%20graphs',
    category: 'Journal'
  },
  {
    id: 'pub168',
    year: 2001,
    title: 'Application and evaluation of linear/restricted nonlinear observers to a nonlinear CSTR',
    authors: ['S Dash', 'S Kantharao', 'R Rengaswamy', 'V Venkatasubramanian'],
    venue: 'Computer Aided Chemical Engineering 9, 853-858',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Application%20and%20evaluation%20of%20linear/restricted%20nonlinear%20observers%20to%20a%20nonlinear%20CSTR',
    category: 'Journal'
  },
  {
    id: 'pub169',
    year: 2026,
    title: 'UNified FramewOrk for reguLatory Dynamics (UNFOLD): Dissecting robustness, plasticity, evolvability and canalisation of biological function',
    authors: ['D Chakraborty', 'R Rengaswamy', 'K Raman'],
    venue: 'PLOS Computational Biology 22 (5), e1014289',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=UNified%20FramewOrk%20for%20reguLatory%20Dynamics%20%28UNFOLD%29%3A%20Dissecting%20robustness%2C%20plasticity%2C%20evolvability%20and%20canalisation%20of%20biological%20function',
    category: 'Journal'
  },
  {
    id: 'pub170',
    year: 2026,
    title: 'Agent-based framework for modeling hyperlocal urban air quality',
    authors: ['S Swaminathan', 'P Agrawal', 'VF McNeill', 'R Rengaswamy'],
    venue: 'npj Clean Air 2 (1), 32',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Agent-based%20framework%20for%20modeling%20hyperlocal%20urban%20air%20quality',
    category: 'Journal'
  },
  {
    id: 'pub171',
    year: 2026,
    title: 'A cross-correlation-based framework for root cause detection in multivariable control networks',
    authors: ['A Bansal', 'R Suresh', 'R Rengaswamy', 'P Saha'],
    venue: 'International Journal of Dynamics and Control 14 (5), 171',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=A%20cross-correlation-based%20framework%20for%20root%20cause%20detection%20in%20multivariable%20control%20networks',
    category: 'Journal'
  },
  {
    id: 'pub172',
    year: 2026,
    title: 'Modeling and dissecting bidirectional feedback in gene-metabolite systems using the CausalFlux method',
    authors: ['N Subramanian', 'SP Kumar', 'R Rengaswamy', 'NP Bhatt', 'M Narayanan'],
    venue: 'bioRxiv, 2026.04.10.717623',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Modeling%20and%20dissecting%20bidirectional%20feedback%20in%20gene-metabolite%20systems%20using%20the%20CausalFlux%20method',
    category: 'Preprint'
  },
  {
    id: 'pub173',
    year: 2026,
    title: 'Distributed state estimation of linear descriptor systems',
    authors: ['J Jaiswal', 'VK Mishra', 'R Rengaswamy', 'N Bajcinca'],
    venue: 'Systems & Control Letters 209, 106360',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Distributed%20state%20estimation%20of%20linear%20descriptor%20systems',
    category: 'Journal'
  },
  {
    id: 'pub174',
    year: 2025,
    title: 'Analysis of impact of operating conditions on lithium-ion battery performance using in silico design of experiments',
    authors: ['A Muthukkumaran', 'R Rengaswamy'],
    venue: 'AIChE Journal 71 (7), e18815',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Analysis%20of%20impact%20of%20operating%20conditions%20on%20lithium-ion%20battery%20performance%20using%20in%20silico%20design%20of%20experiments',
    category: 'Journal'
  },
  {
    id: 'pub175',
    year: 2025,
    title: 'User authentication system based on human exhaled breath physics (vol 19, e0301971, 2024)',
    authors: ['M Karunanethy', 'R Tripathi', 'M Panchagnula', 'R Rengaswamy'],
    venue: 'PLOS ONE 20 (3)',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=User%20authentication%20system%20based%20on%20human%20exhaled%20breath%20physics%20%28vol%2019%2C%20e0301971%2C%202024%29',
    category: 'Journal'
  },
  {
    id: 'pub176',
    year: 2024,
    title: 'Upstream flow geometries can be uniquely learnt from single-point turbulence signatures',
    authors: ['M Karunanethy', 'R Rengaswamy', 'MV Panchagnula'],
    venue: 'arXiv preprint arXiv:2412.10630',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Upstream%20flow%20geometries%20can%20be%20uniquely%20learnt%20from%20single-point%20turbulence%20signatures',
    category: 'Preprint'
  },
  {
    id: 'pub177',
    year: 2024,
    title: 'Development and external validation of Indian population-specific Garbhini-GA2 model for estimating gestational age in second and third trimesters',
    authors: ['VP Gadekar', 'N Damaraju', 'A Xavier', 'SB Thakur', 'R Vijayram', 'BK Desiraju'],
    venue: 'The Lancet Regional Health-Southeast Asia 25',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Development%20and%20external%20validation%20of%20Indian%20population-specific%20Garbhini-GA2%20model%20for%20estimating%20gestational%20age%20in%20second%20and%20third%20trimesters',
    category: 'Journal'
  },
  {
    id: 'pub178',
    year: 2021,
    title: 'Development of second and third-trimester population-specific machine learning pregnancy dating model (Garbhini-GA2) derived from the GARBH-Ini cohort in north India',
    authors: ['N Damaraju', 'A Xavier', 'R Vijayram', 'BK Desiraju', 'S Misra', 'A Khurana'],
    venue: 'medRxiv, 2021.10.02.21264450',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Development%20of%20second%20and%20third-trimester%20population-specific%20machine%20learning%20pregnancy%20dating%20model%20%28Garbhini-GA2%29%20derived%20from%20the%20GARBH-Ini%20cohort%20in%20north%20India',
    category: 'Preprint'
  },
  {
    id: 'pub179',
    year: 2020,
    title: 'Proof for frequency response analysis using chirp signals',
    authors: ['R Suresh', 'R Rengaswamy'],
    venue: 'arXiv preprint arXiv:2008.11393',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Proof%20for%20frequency%20response%20analysis%20using%20chirp%20signals',
    category: 'Preprint'
  },
  {
    id: 'pub180',
    year: 2018,
    title: 'Computational framework for exploring the interplay of diet and gut microbiota in autism',
    authors: ['MV Palukuri', 'S Shivakumar', 'S Sahoo', 'R Rengaswamy'],
    venue: 'bioRxiv, 422931',
    keywords: [],
    pdfUrl: 'https://scholar.google.com/scholar?q=Computational%20framework%20for%20exploring%20the%20interplay%20of%20diet%20and%20gut%20microbiota%20in%20autism',
    category: 'Preprint'
  },
];