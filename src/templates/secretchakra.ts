import {IComponents} from "~core/ComponentDefinitions";

export const secretchakra: IComponents = {
  root: {
    id: 'root',
    parent: 'root',
    type: 'Box',
    children: ['comp-root'],
    props: {},
  },
  'comp-root': {
    id: 'comp-root',
    props: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      color: '',
      backgroundColor: 'gray.100',
    },
    children: ['comp-K74L6WFISOLG3', 'comp-K74LORRCCHJDL'],
    type: 'Flex',
    parent: 'root',
    rootParentType: 'Flex',
  },
  'comp-K74L6WFISOLG3': {
    id: 'comp-K74L6WFISOLG3',
    props: {
      backgroundColor: '#1a202c',
      p: '3',
    },
    children: [
      'comp-K74L811LSF53G',
      'comp-K74LBAD12N7N8',
      'comp-K74LCUBUZD53Y',
    ],
    type: 'Flex',
    parent: 'comp-root',
    rootParentType: 'Flex',
  },
  'comp-K74L811LSF53G': {
    id: 'comp-K74L811LSF53G',
    props: {
      display: 'flex',
      fontSize: 'xl',
      ml: '4',
    },
    children: [
      'comp-K74L8Y2I2J5V4',
      'comp-K74L83QUJ55KZ',
      'comp-K74L8CNA98THU',
    ],
    type: 'Box',
    parent: 'comp-K74L6WFISOLG3',
    rootParentType: 'Box',
  },
  'comp-K74L83QUJ55KZ': {
    id: 'comp-K74L83QUJ55KZ',
    props: {
      children: 'secret',
      color: 'white',
      fontWeight: 'bold',
    },
    children: [],
    type: 'Text',
    parent: 'comp-K74L811LSF53G',
    rootParentType: 'Text',
  },
  'comp-K74L8CNA98THU': {
    id: 'comp-K74L8CNA98THU',
    props: {
      children: 'chakra',
      color: 'white',
    },
    children: [],
    type: 'Text',
    parent: 'comp-K74L811LSF53G',
    rootParentType: 'Text',
  },
  'comp-K74L8Y2I2J5V4': {
    id: 'comp-K74L8Y2I2J5V4',
    props: {
      icon: 'MoonIcon',
      color: 'whatsapp.100',
      mr: '2',
    },
    children: [],
    type: 'Icon',
    parent: 'comp-K74L811LSF53G',
    rootParentType: 'Icon',
  },
  'comp-K74LBAD12N7N8': {
    id: 'comp-K74LBAD12N7N8',
    props: {
      justifyContent: 'center',
      alignItems: 'center',
      ml: '10',
      mr: '4',
    },
    children: ['comp-K74LBPCL2U206', 'comp-K74LBFTN7FVZR'],
    type: 'Flex',
    parent: 'comp-K74L6WFISOLG3',
    rootParentType: 'Flex',
  },
  'comp-K74LBFTN7FVZR': {
    id: 'comp-K74LBFTN7FVZR',
    props: {
      color: 'teal',
      isChecked: true,
      size: 'sm',
    },
    children: [],
    type: 'Switch',
    parent: 'comp-K74LBAD12N7N8',
    rootParentType: 'Switch',
  },
  'comp-K74LBPCL2U206': {
    id: 'comp-K74LBPCL2U206',
    props: {
      children: 'Builder mode',
      color: 'white',
      fontSize: 'xs',
      pr: '2',
    },
    children: [],
    type: 'Text',
    parent: 'comp-K74LBAD12N7N8',
    rootParentType: 'Text',
  },
  'comp-K74LCUBUXNFY3': {
    id: 'comp-K74LCUBUXNFY3',
    props: {
      children: 'Code panel',
      color: 'white',
      fontSize: 'xs',
      pr: '2',
    },
    children: [],
    type: 'Text',
    parent: 'comp-K74LCUBUZD53Y',
    rootParentType: 'Text',
  },
  'comp-K74LCUBU9LHFQ': {
    id: 'comp-K74LCUBU9LHFQ',
    props: {
      color: 'teal',
      isChecked: true,
      size: 'sm',
    },
    children: [],
    type: 'Switch',
    parent: 'comp-K74LCUBUZD53Y',
    rootParentType: 'Switch',
  },
  'comp-K74LCUBUZD53Y': {
    id: 'comp-K74LCUBUZD53Y',
    props: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    children: ['comp-K74LCUBUXNFY3', 'comp-K74LCUBU9LHFQ'],
    type: 'Flex',
    parent: 'comp-K74L6WFISOLG3',
    rootParentType: 'Flex',
  },
  'comp-K74LFVLYTWR7H': {
    id: 'comp-K74LFVLYTWR7H',
    props: {
      width: '15rem',
      backgroundColor: '#2e3748',
      m: '',
      p: '5',
      flexDirection: 'column',
      height: '100%',
    },
    children: ['comp-K74LH4LGZPG3Q', 'comp-K74LJ2RGGFSO8'],
    type: 'Flex',
    parent: 'comp-K74LORRCCHJDL',
    rootParentType: 'Flex',
  },
  'comp-K74LH4LGZPG3Q': {
    id: 'comp-K74LH4LGZPG3Q',
    props: {
      size: 'sm',
      variant: 'outline',
      backgroundColor: 'gray.600',
      border: 'none',
      placeholder: 'Search components...',
    },
    children: [],
    type: 'Input',
    parent: 'comp-K74LFVLYTWR7H',
    rootParentType: 'Input',
  },
  'comp-K74LJ2RGGFSO8': {
    id: 'comp-K74LJ2RGGFSO8',
    props: {
      mt: '5',
    },
    children: [
      'comp-K74LJQGBRXK7V',
      'comp-K74LN1I4JX3W1',
      'comp-K74LN28WQ0U7I',
      'comp-K74LNLUX27J08',
      'comp-K74LNM59R5VQ2',
      'comp-K74LNMADR9K0Q',
      'comp-K74LNMEN8KNY1',
    ],
    type: 'Stack',
    parent: 'comp-K74LFVLYTWR7H',
    rootParentType: 'Stack',
  },
  'comp-K74LJQGBRXK7V': {
    id: 'comp-K74LJQGBRXK7V',
    props: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    children: ['comp-K74LJUTPCBAFB', 'comp-K74LKHWKQF9E6'],
    type: 'Box',
    parent: 'comp-K74LJ2RGGFSO8',
    rootParentType: 'Box',
  },
  'comp-K74LJUTPCBAFB': {
    id: 'comp-K74LJUTPCBAFB',
    props: {
      icon: 'DragHandleIcon',
      color: 'gray.300',
      fontSize: 'sm',
      mr: '2',
    },
    children: [],
    type: 'Icon',
    parent: 'comp-K74LJQGBRXK7V',
    rootParentType: 'Icon',
  },
  'comp-K74LKHWKQF9E6': {
    id: 'comp-K74LKHWKQF9E6',
    props: {
      children: 'Box',
      fontSize: 'sm',
      color: 'gray.300',
    },
    children: [],
    type: 'Text',
    parent: 'comp-K74LJQGBRXK7V',
    rootParentType: 'Text',
  },
  'comp-K74LN1I49Q2D6': {
    id: 'comp-K74LN1I49Q2D6',
    props: {
      icon: 'DragHandleIcon',
      color: 'gray.300',
      fontSize: 'sm',
      mr: '2',
    },
    children: [],
    type: 'Icon',
    parent: 'comp-K74LN1I4JX3W1',
    rootParentType: 'Icon',
  },
  'comp-K74LN1I4K6K6U': {
    id: 'comp-K74LN1I4K6K6U',
    props: {
      children: 'Textarea',
      fontSize: 'sm',
      color: 'gray.300',
    },
    children: [],
    type: 'Text',
    parent: 'comp-K74LN1I4JX3W1',
    rootParentType: 'Text',
  },
  'comp-K74LN1I4JX3W1': {
    id: 'comp-K74LN1I4JX3W1',
    props: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    children: ['comp-K74LN1I49Q2D6', 'comp-K74LN1I4K6K6U'],
    type: 'Box',
    parent: 'comp-K74LJ2RGGFSO8',
    rootParentType: 'Box',
  },
  'comp-K74LN28W6SFUY': {
    id: 'comp-K74LN28W6SFUY',
    props: {
      icon: 'DragHandleIcon',
      color: 'gray.300',
      fontSize: 'sm',
      mr: '2',
    },
    children: [],
    type: 'Icon',
    parent: 'comp-K74LN28WQ0U7I',
    rootParentType: 'Icon',
  },
  'comp-K74LN28WJ5IBP': {
    id: 'comp-K74LN28WJ5IBP',
    props: {
      children: 'Avatar',
      fontSize: 'sm',
      color: 'gray.300',
    },
    children: [],
    type: 'Text',
    parent: 'comp-K74LN28WQ0U7I',
    rootParentType: 'Text',
  },
  'comp-K74LN28WQ0U7I': {
    id: 'comp-K74LN28WQ0U7I',
    props: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    children: ['comp-K74LN28W6SFUY', 'comp-K74LN28WJ5IBP'],
    type: 'Box',
    parent: 'comp-K74LJ2RGGFSO8',
    rootParentType: 'Box',
  },
  'comp-K74LNLUXPHO6M': {
    id: 'comp-K74LNLUXPHO6M',
    props: {
      icon: 'DragHandleIcon',
      color: 'gray.300',
      fontSize: 'sm',
      mr: '2',
    },
    children: [],
    type: 'Icon',
    parent: 'comp-K74LNLUX27J08',
    rootParentType: 'Icon',
  },
  'comp-K74LNLUX7SD0H': {
    id: 'comp-K74LNLUX7SD0H',
    props: {
      children: 'Avatar',
      fontSize: 'sm',
      color: 'gray.300',
    },
    children: [],
    type: 'Text',
    parent: 'comp-K74LNLUX27J08',
    rootParentType: 'Text',
  },
  'comp-K74LNLUX27J08': {
    id: 'comp-K74LNLUX27J08',
    props: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    children: ['comp-K74LNLUXPHO6M', 'comp-K74LNLUX7SD0H'],
    type: 'Box',
    parent: 'comp-K74LJ2RGGFSO8',
    rootParentType: 'Box',
  },
  'comp-K74LNM597JAOI': {
    id: 'comp-K74LNM597JAOI',
    props: {
      icon: 'DragHandleIcon',
      color: 'gray.300',
      fontSize: 'sm',
      mr: '2',
    },
    children: [],
    type: 'Icon',
    parent: 'comp-K74LNM59R5VQ2',
    rootParentType: 'Icon',
  },
  'comp-K74LNM59RM6C2': {
    id: 'comp-K74LNM59RM6C2',
    props: {
      children: 'Badge',
      fontSize: 'sm',
      color: 'gray.300',
    },
    children: [],
    type: 'Text',
    parent: 'comp-K74LNM59R5VQ2',
    rootParentType: 'Text',
  },
  'comp-K74LNM59R5VQ2': {
    id: 'comp-K74LNM59R5VQ2',
    props: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    children: ['comp-K74LNM597JAOI', 'comp-K74LNM59RM6C2'],
    type: 'Box',
    parent: 'comp-K74LJ2RGGFSO8',
    rootParentType: 'Box',
  },
  'comp-K74LNMAD8I86G': {
    id: 'comp-K74LNMAD8I86G',
    props: {
      icon: 'DragHandleIcon',
      color: 'gray.300',
      fontSize: 'sm',
      mr: '2',
    },
    children: [],
    type: 'Icon',
    parent: 'comp-K74LNMADR9K0Q',
    rootParentType: 'Icon',
  },
  'comp-K74LNMAD7BSAA': {
    id: 'comp-K74LNMAD7BSAA',
    props: {
      children: 'Tag',
      fontSize: 'sm',
      color: 'gray.300',
    },
    children: [],
    type: 'Text',
    parent: 'comp-K74LNMADR9K0Q',
    rootParentType: 'Text',
  },
  'comp-K74LNMADR9K0Q': {
    id: 'comp-K74LNMADR9K0Q',
    props: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    children: ['comp-K74LNMAD8I86G', 'comp-K74LNMAD7BSAA'],
    type: 'Box',
    parent: 'comp-K74LJ2RGGFSO8',
    rootParentType: 'Box',
  },
  'comp-K74LNMENCU4KP': {
    id: 'comp-K74LNMENCU4KP',
    props: {
      icon: 'DragHandleIcon',
      color: 'gray.300',
      fontSize: 'sm',
      mr: '2',
    },
    children: [],
    type: 'Icon',
    parent: 'comp-K74LNMEN8KNY1',
    rootParentType: 'Icon',
  },
  'comp-K74LNMENV2U06': {
    id: 'comp-K74LNMENV2U06',
    props: {
      children: 'Chekbox',
      fontSize: 'sm',
      color: 'gray.300',
    },
    children: [],
    type: 'Text',
    parent: 'comp-K74LNMEN8KNY1',
    rootParentType: 'Text',
  },
  'comp-K74LNMEN8KNY1': {
    id: 'comp-K74LNMEN8KNY1',
    props: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    children: ['comp-K74LNMENCU4KP', 'comp-K74LNMENV2U06'],
    type: 'Box',
    parent: 'comp-K74LJ2RGGFSO8',
    rootParentType: 'Box',
  },
  'comp-K74LORRCCHJDL': {
    id: 'comp-K74LORRCCHJDL',
    props: {
      height: '100%',
    },
    children: [
      'comp-K74LFVLYTWR7H',
      'comp-K74LPAIMR0ECA',
      'comp-K74LPCLIHYI6L',
    ],
    type: 'Flex',
    parent: 'comp-root',
    rootParentType: 'Flex',
  },
  'comp-K74LPAIMR0ECA': {
    id: 'comp-K74LPAIMR0ECA',
    props: {
      width: '100%',
      height: '100%',
      p: '5',
    },
    children: ['comp-K74M9CCGRSDT1'],
    type: 'Flex',
    parent: 'comp-K74LORRCCHJDL',
    rootParentType: 'Flex',
  },
  'comp-K74LPCLIHYI6L': {
    id: 'comp-K74LPCLIHYI6L',
    props: {
      width: '17rem',
      height: '100%',
      backgroundColor: 'white',
      justifyContent: 'flex-start',
      flexDirection: 'column',
    },
    children: [
      'comp-K74LYYQF91099',
      'comp-K74M27D1Q37CK',
      'comp-K74M4AXG5WJSX',
      'comp-K74M7L09GZDX4',
      'comp-K74M7RPHLYYCJ',
    ],
    type: 'Flex',
    parent: 'comp-K74LORRCCHJDL',
    rootParentType: 'Flex',
  },
  'comp-K74LYYQF91099': {
    id: 'comp-K74LYYQF91099',
    props: {
      bg: 'yellow.100',
      p: '2',
      boxShadow: 'sm',
    },
    children: ['comp-K74LZHHZT6RVX'],
    type: 'Box',
    parent: 'comp-K74LPCLIHYI6L',
    rootParentType: 'Box',
  },
  'comp-K74LZHHZT6RVX': {
    id: 'comp-K74LZHHZT6RVX',
    props: {
      children: 'SimpleGrid',
      color: 'yellow.800',
      fontWeight: 'bold',
    },
    children: [],
    type: 'Text',
    parent: 'comp-K74LYYQF91099',
    rootParentType: 'Text',
  },
  'comp-K74M27D1Q37CK': {
    id: 'comp-K74M27D1Q37CK',
    props: {
      justifyContent: 'flex-end',
      m: '',
      mt: '2',
    },
    children: [
      'comp-K74M2CH7IR4IT',
      'comp-K74M2TSIDQKT0',
      'comp-K74M2U4X3SQZX',
    ],
    type: 'Flex',
    parent: 'comp-K74LPCLIHYI6L',
    rootParentType: 'Flex',
  },
  'comp-K74M2CH7IR4IT': {
    id: 'comp-K74M2CH7IR4IT',
    props: {
      'aria-label': 'icon',
      icon: 'CopyIcon',
      size: 'xs',
      variant: 'ghost',
      colorScheme: 'gray',
    },
    children: [],
    type: 'IconButton',
    parent: 'comp-K74M27D1Q37CK',
    rootParentType: 'IconButton',
  },
  'comp-K74M2TSIDQKT0': {
    id: 'comp-K74M2TSIDQKT0',
    props: {
      'aria-label': 'icon',
      icon: 'DeleteIcon',
      size: 'xs',
      variant: 'ghost',
      colorScheme: 'gray',
    },
    children: [],
    type: 'IconButton',
    parent: 'comp-K74M27D1Q37CK',
    rootParentType: 'IconButton',
  },
  'comp-K74M2U4X3SQZX': {
    id: 'comp-K74M2U4X3SQZX',
    props: {
      'aria-label': 'icon',
      icon: 'RepeatIcon',
      size: 'xs',
      variant: 'ghost',
      colorScheme: 'gray',
    },
    children: [],
    type: 'IconButton',
    parent: 'comp-K74M27D1Q37CK',
    rootParentType: 'IconButton',
  },
  'comp-K74M4AXG5WJSX': {
    id: 'comp-K74M4AXG5WJSX',
    props: {
      columns: 2,
      spacingX: 1,
      spacingY: 1,
      p: '1',
      pl: '2',
      pr: '',
    },
    children: ['comp-K74M4I0N0ZGMZ', 'comp-K74M4LQNKWGCQ'],
    type: 'SimpleGrid',
    parent: 'comp-K74LPCLIHYI6L',
    rootParentType: 'SimpleGrid',
  },
  'comp-K74M4I0N0ZGMZ': {
    id: 'comp-K74M4I0N0ZGMZ',
    props: {
      children: 'Columns',
      fontSize: 'xs',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      color: 'gray.500',
    },
    children: [],
    type: 'Text',
    parent: 'comp-K74M4AXG5WJSX',
    rootParentType: 'Text',
  },
  'comp-K74M4LQNKWGCQ': {
    id: 'comp-K74M4LQNKWGCQ',
    props: {
      size: 'sm',
    },
    children: [],
    type: 'Input',
    parent: 'comp-K74M4AXG5WJSX',
    rootParentType: 'Input',
  },
  'comp-K74M7L09GCMEA': {
    id: 'comp-K74M7L09GCMEA',
    props: {
      children: 'Spacing X',
      fontSize: 'xs',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      color: 'gray.500',
    },
    children: [],
    type: 'Text',
    parent: 'comp-K74M7L09GZDX4',
    rootParentType: 'Text',
  },
  'comp-K74M7L09OF9HM': {
    id: 'comp-K74M7L09OF9HM',
    props: {
      size: 'sm',
    },
    children: [],
    type: 'Input',
    parent: 'comp-K74M7L09GZDX4',
    rootParentType: 'Input',
  },
  'comp-K74M7L09GZDX4': {
    id: 'comp-K74M7L09GZDX4',
    props: {
      columns: 2,
      spacingX: 1,
      spacingY: 1,
      p: '1',
      pl: '2',
    },
    children: ['comp-K74M7L09GCMEA', 'comp-K74M7L09OF9HM'],
    type: 'SimpleGrid',
    parent: 'comp-K74LPCLIHYI6L',
    rootParentType: 'SimpleGrid',
  },
  'comp-K74M7RPHZSJBU': {
    id: 'comp-K74M7RPHZSJBU',
    props: {
      children: 'Spacing Y',
      fontSize: 'xs',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      color: 'gray.500',
    },
    children: [],
    type: 'Text',
    parent: 'comp-K74M7RPHLYYCJ',
    rootParentType: 'Text',
  },
  'comp-K74M7RPHJNL06': {
    id: 'comp-K74M7RPHJNL06',
    props: {
      size: 'sm',
    },
    children: [],
    type: 'Input',
    parent: 'comp-K74M7RPHLYYCJ',
    rootParentType: 'Input',
  },
  'comp-K74M7RPHLYYCJ': {
    id: 'comp-K74M7RPHLYYCJ',
    props: {
      columns: 2,
      spacingX: 1,
      spacingY: 1,
      p: '1',
      pl: '2',
    },
    children: ['comp-K74M7RPHZSJBU', 'comp-K74M7RPHJNL06'],
    type: 'SimpleGrid',
    parent: 'comp-K74LPCLIHYI6L',
    rootParentType: 'SimpleGrid',
  },
  'comp-K74M9CCGNQPHP': {
    id: 'comp-K74M9CCGNQPHP',
    props: {
      icon: 'MoonIcon',
      color: 'whatsapp.100',
      mr: '2',
    },
    children: [],
    type: 'Icon',
    parent: 'comp-K74M9CCGSAWAU',
    rootParentType: 'Icon',
  },
  'comp-K74M9CCGBL195': {
    id: 'comp-K74M9CCGBL195',
    props: {
      children: 'secret',
      color: 'white',
      fontWeight: 'bold',
    },
    children: [],
    type: 'Text',
    parent: 'comp-K74M9CCGSAWAU',
    rootParentType: 'Text',
  },
  'comp-K74M9CCGVYHML': {
    id: 'comp-K74M9CCGVYHML',
    props: {
      children: 'chakra',
      color: 'white',
    },
    children: [],
    type: 'Text',
    parent: 'comp-K74M9CCGSAWAU',
    rootParentType: 'Text',
  },
  'comp-K74M9CCGSAWAU': {
    id: 'comp-K74M9CCGSAWAU',
    props: {
      display: 'flex',
      fontSize: 'xl',
      ml: '4',
    },
    children: [
      'comp-K74M9CCGNQPHP',
      'comp-K74M9CCGBL195',
      'comp-K74M9CCGVYHML',
    ],
    type: 'Box',
    parent: 'comp-K74M9CCGUBSH1',
    rootParentType: 'Box',
  },
  'comp-K74M9CCGDFLWX': {
    id: 'comp-K74M9CCGDFLWX',
    props: {
      children: 'Builder mode',
      color: 'white',
      fontSize: 'xs',
      pr: '2',
    },
    children: [],
    type: 'Text',
    parent: 'comp-K74M9CCGPPQ74',
    rootParentType: 'Text',
  },
  'comp-K74M9CCGM8KTG': {
    id: 'comp-K74M9CCGM8KTG',
    props: {
      color: 'teal',
      isChecked: true,
      size: 'sm',
    },
    children: [],
    type: 'Switch',
    parent: 'comp-K74M9CCGPPQ74',
    rootParentType: 'Switch',
  },
  'comp-K74M9CCGPPQ74': {
    id: 'comp-K74M9CCGPPQ74',
    props: {
      justifyContent: 'center',
      alignItems: 'center',
      ml: '10',
      mr: '4',
    },
    children: ['comp-K74M9CCGDFLWX', 'comp-K74M9CCGM8KTG'],
    type: 'Flex',
    parent: 'comp-K74M9CCGUBSH1',
    rootParentType: 'Flex',
  },
  'comp-K74M9CCGIEWKT': {
    id: 'comp-K74M9CCGIEWKT',
    props: {
      children: 'Code panel',
      color: 'white',
      fontSize: 'xs',
      pr: '2',
    },
    children: [],
    type: 'Text',
    parent: 'comp-K74M9CCGWWDO1',
    rootParentType: 'Text',
  },
  'comp-K74M9CCGNK2Z1': {
    id: 'comp-K74M9CCGNK2Z1',
    props: {
      color: 'teal',
      isChecked: true,
      size: 'sm',
    },
    children: [],
    type: 'Switch',
    parent: 'comp-K74M9CCGWWDO1',
    rootParentType: 'Switch',
  },
  'comp-K74M9CCGWWDO1': {
    id: 'comp-K74M9CCGWWDO1',
    props: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    children: ['comp-K74M9CCGIEWKT', 'comp-K74M9CCGNK2Z1'],
    type: 'Flex',
    parent: 'comp-K74M9CCGUBSH1',
    rootParentType: 'Flex',
  },
  'comp-K74M9CCGUBSH1': {
    id: 'comp-K74M9CCGUBSH1',
    props: {
      backgroundColor: '#1a202c',
      p: '3',
    },
    children: [
      'comp-K74M9CCGSAWAU',
      'comp-K74M9CCGPPQ74',
      'comp-K74M9CCGWWDO1',
    ],
    type: 'Flex',
    parent: 'comp-K74M9CCGRSDT1',
    rootParentType: 'Flex',
  },
  'comp-K74M9CCGGZE9Q': {
    id: 'comp-K74M9CCGGZE9Q',
    props: {
      icon: 'DragHandleIcon',
      color: 'gray.300',
      fontSize: 'sm',
      mr: '2',
    },
    children: [],
    type: 'Icon',
    parent: 'comp-K74M9CCGE9N4R',
    rootParentType: 'Icon',
  },
  'comp-K74M9CCG5Q2OR': {
    id: 'comp-K74M9CCG5Q2OR',
    props: {
      children: 'Box',
      fontSize: 'sm',
      color: 'gray.300',
    },
    children: [],
    type: 'Text',
    parent: 'comp-K74M9CCGE9N4R',
    rootParentType: 'Text',
  },
  'comp-K74M9CCGE9N4R': {
    id: 'comp-K74M9CCGE9N4R',
    props: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    children: ['comp-K74M9CCGGZE9Q', 'comp-K74M9CCG5Q2OR'],
    type: 'Box',
    parent: 'comp-K74M9CCG9EXJZ',
    rootParentType: 'Box',
  },
  'comp-K74M9CCG0S0RV': {
    id: 'comp-K74M9CCG0S0RV',
    props: {
      icon: 'DragHandleIcon',
      color: 'gray.300',
      fontSize: 'sm',
      mr: '2',
    },
    children: [],
    type: 'Icon',
    parent: 'comp-K74M9CCGCUIE7',
    rootParentType: 'Icon',
  },
  'comp-K74M9CCGT6O9V': {
    id: 'comp-K74M9CCGT6O9V',
    props: {
      children: 'Textarea',
      fontSize: 'sm',
      color: 'gray.300',
    },
    children: [],
    type: 'Text',
    parent: 'comp-K74M9CCGCUIE7',
    rootParentType: 'Text',
  },
  'comp-K74M9CCGCUIE7': {
    id: 'comp-K74M9CCGCUIE7',
    props: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    children: ['comp-K74M9CCG0S0RV', 'comp-K74M9CCGT6O9V'],
    type: 'Box',
    parent: 'comp-K74M9CCG9EXJZ',
    rootParentType: 'Box',
  },
  'comp-K74M9CCGPQ7C2': {
    id: 'comp-K74M9CCGPQ7C2',
    props: {
      icon: 'DragHandleIcon',
      color: 'gray.300',
      fontSize: 'sm',
      mr: '2',
    },
    children: [],
    type: 'Icon',
    parent: 'comp-K74M9CCGP7TL5',
    rootParentType: 'Icon',
  },
  'comp-K74M9CCG88SSV': {
    id: 'comp-K74M9CCG88SSV',
    props: {
      children: 'Avatar',
      fontSize: 'sm',
      color: 'gray.300',
    },
    children: [],
    type: 'Text',
    parent: 'comp-K74M9CCGP7TL5',
    rootParentType: 'Text',
  },
  'comp-K74M9CCGP7TL5': {
    id: 'comp-K74M9CCGP7TL5',
    props: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    children: ['comp-K74M9CCGPQ7C2', 'comp-K74M9CCG88SSV'],
    type: 'Box',
    parent: 'comp-K74M9CCG9EXJZ',
    rootParentType: 'Box',
  },
  'comp-K74M9CCGEPP92': {
    id: 'comp-K74M9CCGEPP92',
    props: {
      icon: 'DragHandleIcon',
      color: 'gray.300',
      fontSize: 'sm',
      mr: '2',
    },
    children: [],
    type: 'Icon',
    parent: 'comp-K74M9CCGIIVIY',
    rootParentType: 'Icon',
  },
  'comp-K74M9CCGWS0H5': {
    id: 'comp-K74M9CCGWS0H5',
    props: {
      children: 'Avatar',
      fontSize: 'sm',
      color: 'gray.300',
    },
    children: [],
    type: 'Text',
    parent: 'comp-K74M9CCGIIVIY',
    rootParentType: 'Text',
  },
  'comp-K74M9CCGIIVIY': {
    id: 'comp-K74M9CCGIIVIY',
    props: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    children: ['comp-K74M9CCGEPP92', 'comp-K74M9CCGWS0H5'],
    type: 'Box',
    parent: 'comp-K74M9CCG9EXJZ',
    rootParentType: 'Box',
  },
  'comp-K74M9CCG2CWCC': {
    id: 'comp-K74M9CCG2CWCC',
    props: {
      icon: 'DragHandleIcon',
      color: 'gray.300',
      fontSize: 'sm',
      mr: '2',
    },
    children: [],
    type: 'Icon',
    parent: 'comp-K74M9CCGKXNSF',
    rootParentType: 'Icon',
  },
  'comp-K74M9CCGKMT3N': {
    id: 'comp-K74M9CCGKMT3N',
    props: {
      children: 'Badge',
      fontSize: 'sm',
      color: 'gray.300',
    },
    children: [],
    type: 'Text',
    parent: 'comp-K74M9CCGKXNSF',
    rootParentType: 'Text',
  },
  'comp-K74M9CCGKXNSF': {
    id: 'comp-K74M9CCGKXNSF',
    props: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    children: ['comp-K74M9CCG2CWCC', 'comp-K74M9CCGKMT3N'],
    type: 'Box',
    parent: 'comp-K74M9CCG9EXJZ',
    rootParentType: 'Box',
  },
  'comp-K74M9CCGBHD01': {
    id: 'comp-K74M9CCGBHD01',
    props: {
      icon: 'DragHandleIcon',
      color: 'gray.300',
      fontSize: 'sm',
      mr: '2',
    },
    children: [],
    type: 'Icon',
    parent: 'comp-K74M9CCG7N53K',
    rootParentType: 'Icon',
  },
  'comp-K74M9CCG2ROC8': {
    id: 'comp-K74M9CCG2ROC8',
    props: {
      children: 'Tag',
      fontSize: 'sm',
      color: 'gray.300',
    },
    children: [],
    type: 'Text',
    parent: 'comp-K74M9CCG7N53K',
    rootParentType: 'Text',
  },
  'comp-K74M9CCG7N53K': {
    id: 'comp-K74M9CCG7N53K',
    props: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    children: ['comp-K74M9CCGBHD01', 'comp-K74M9CCG2ROC8'],
    type: 'Box',
    parent: 'comp-K74M9CCG9EXJZ',
    rootParentType: 'Box',
  },
  'comp-K74M9CCGJS0IN': {
    id: 'comp-K74M9CCGJS0IN',
    props: {
      icon: 'DragHandleIcon',
      color: 'gray.300',
      fontSize: 'sm',
      mr: '2',
    },
    children: [],
    type: 'Icon',
    parent: 'comp-K74M9CCGV27GO',
    rootParentType: 'Icon',
  },
  'comp-K74M9CCGRFTZY': {
    id: 'comp-K74M9CCGRFTZY',
    props: {
      children: 'Chekbox',
      fontSize: 'sm',
      color: 'gray.300',
    },
    children: [],
    type: 'Text',
    parent: 'comp-K74M9CCGV27GO',
    rootParentType: 'Text',
  },
  'comp-K74M9CCGV27GO': {
    id: 'comp-K74M9CCGV27GO',
    props: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    children: ['comp-K74M9CCGJS0IN', 'comp-K74M9CCGRFTZY'],
    type: 'Box',
    parent: 'comp-K74M9CCG9EXJZ',
    rootParentType: 'Box',
  },
  'comp-K74M9CCG9EXJZ': {
    id: 'comp-K74M9CCG9EXJZ',
    props: {
      mt: '5',
    },
    children: [
      'comp-K74M9CCGE9N4R',
      'comp-K74M9CCGCUIE7',
      'comp-K74M9CCGP7TL5',
      'comp-K74M9CCGIIVIY',
      'comp-K74M9CCGKXNSF',
      'comp-K74M9CCG7N53K',
      'comp-K74M9CCGV27GO',
    ],
    type: 'Stack',
    parent: 'comp-K74M9CCG94DEQ',
    rootParentType: 'Stack',
  },
  'comp-K74M9CCG94DEQ': {
    id: 'comp-K74M9CCG94DEQ',
    props: {
      width: '15rem',
      backgroundColor: '#2e3748',
      m: '',
      p: '5',
      flexDirection: 'column',
      height: '100%',
    },
    children: ['comp-K74MDRB8N3GRS', 'comp-K74M9CCG9EXJZ'],
    type: 'Flex',
    parent: 'comp-K74M9CCGQDXNZ',
    rootParentType: 'Flex',
  },
  'comp-K74M9CCGVB5K9': {
    id: 'comp-K74M9CCGVB5K9',
    props: {
      width: '100%',
      height: '100%',
    },
    children: [],
    type: 'Flex',
    parent: 'comp-K74M9CCGQDXNZ',
    rootParentType: 'Flex',
  },
  'comp-K74M9CCG9YO15': {
    id: 'comp-K74M9CCG9YO15',
    props: {
      children: 'SimpleGrid',
      color: 'yellow.800',
      fontWeight: 'bold',
    },
    children: [],
    type: 'Text',
    parent: 'comp-K74M9CCGZGAAN',
    rootParentType: 'Text',
  },
  'comp-K74M9CCGZGAAN': {
    id: 'comp-K74M9CCGZGAAN',
    props: {
      bg: 'yellow.100',
      p: '2',
      boxShadow: 'sm',
    },
    children: ['comp-K74M9CCG9YO15'],
    type: 'Box',
    parent: 'comp-K74M9CCG9WW9R',
    rootParentType: 'Box',
  },
  'comp-K74M9CCGSW3SU': {
    id: 'comp-K74M9CCGSW3SU',
    props: {
      'aria-label': 'icon',
      icon: 'CopyIcon',
      size: 'xs',
      variant: 'ghost',
      colorScheme: 'gray',
    },
    children: [],
    type: 'IconButton',
    parent: 'comp-K74M9CCGNMBYL',
    rootParentType: 'IconButton',
  },
  'comp-K74M9CCGTKCJ7': {
    id: 'comp-K74M9CCGTKCJ7',
    props: {
      'aria-label': 'icon',
      icon: 'DeleteIcon',
      size: 'xs',
      variant: 'ghost',
      colorScheme: 'gray',
    },
    children: [],
    type: 'IconButton',
    parent: 'comp-K74M9CCGNMBYL',
    rootParentType: 'IconButton',
  },
  'comp-K74M9CCGGX02O': {
    id: 'comp-K74M9CCGGX02O',
    props: {
      'aria-label': 'icon',
      icon: 'RepeatIcon',
      size: 'xs',
      variant: 'ghost',
      colorScheme: 'gray',
    },
    children: [],
    type: 'IconButton',
    parent: 'comp-K74M9CCGNMBYL',
    rootParentType: 'IconButton',
  },
  'comp-K74M9CCGNMBYL': {
    id: 'comp-K74M9CCGNMBYL',
    props: {
      justifyContent: 'flex-end',
      m: '',
      mt: '2',
    },
    children: [
      'comp-K74M9CCGSW3SU',
      'comp-K74M9CCGTKCJ7',
      'comp-K74M9CCGGX02O',
    ],
    type: 'Flex',
    parent: 'comp-K74M9CCG9WW9R',
    rootParentType: 'Flex',
  },
  'comp-K74M9CCGF4AWI': {
    id: 'comp-K74M9CCGF4AWI',
    props: {
      children: 'Columns',
      fontSize: 'xs',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      color: 'gray.500',
    },
    children: [],
    type: 'Text',
    parent: 'comp-K74M9CCGGMJ6O',
    rootParentType: 'Text',
  },
  'comp-K74M9CCGX9HAN': {
    id: 'comp-K74M9CCGX9HAN',
    props: {
      size: 'sm',
    },
    children: [],
    type: 'Input',
    parent: 'comp-K74M9CCGGMJ6O',
    rootParentType: 'Input',
  },
  'comp-K74M9CCGGMJ6O': {
    id: 'comp-K74M9CCGGMJ6O',
    props: {
      columns: 2,
      spacingX: 1,
      spacingY: 1,
      p: '1',
      pl: '2',
      pr: '',
    },
    children: ['comp-K74M9CCGF4AWI', 'comp-K74M9CCGX9HAN'],
    type: 'SimpleGrid',
    parent: 'comp-K74M9CCG9WW9R',
    rootParentType: 'SimpleGrid',
  },
  'comp-K74M9CCGT5UYZ': {
    id: 'comp-K74M9CCGT5UYZ',
    props: {
      children: 'Spacing X',
      fontSize: 'xs',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      color: 'gray.500',
    },
    children: [],
    type: 'Text',
    parent: 'comp-K74M9CCGZMAHR',
    rootParentType: 'Text',
  },
  'comp-K74M9CCGST1K3': {
    id: 'comp-K74M9CCGST1K3',
    props: {
      size: 'sm',
    },
    children: [],
    type: 'Input',
    parent: 'comp-K74M9CCGZMAHR',
    rootParentType: 'Input',
  },
  'comp-K74M9CCGZMAHR': {
    id: 'comp-K74M9CCGZMAHR',
    props: {
      columns: 2,
      spacingX: 1,
      spacingY: 1,
      p: '1',
      pl: '2',
    },
    children: ['comp-K74M9CCGT5UYZ', 'comp-K74M9CCGST1K3'],
    type: 'SimpleGrid',
    parent: 'comp-K74M9CCG9WW9R',
    rootParentType: 'SimpleGrid',
  },
  'comp-K74M9CCG0N30O': {
    id: 'comp-K74M9CCG0N30O',
    props: {
      children: 'Spacing Y',
      fontSize: 'xs',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      color: 'gray.500',
    },
    children: [],
    type: 'Text',
    parent: 'comp-K74M9CCG6F4OJ',
    rootParentType: 'Text',
  },
  'comp-K74M9CCGBJE71': {
    id: 'comp-K74M9CCGBJE71',
    props: {
      size: 'sm',
    },
    children: [],
    type: 'Input',
    parent: 'comp-K74M9CCG6F4OJ',
    rootParentType: 'Input',
  },
  'comp-K74M9CCG6F4OJ': {
    id: 'comp-K74M9CCG6F4OJ',
    props: {
      columns: 2,
      spacingX: 1,
      spacingY: 1,
      p: '1',
      pl: '2',
    },
    children: ['comp-K74M9CCG0N30O', 'comp-K74M9CCGBJE71'],
    type: 'SimpleGrid',
    parent: 'comp-K74M9CCG9WW9R',
    rootParentType: 'SimpleGrid',
  },
  'comp-K74M9CCG9WW9R': {
    id: 'comp-K74M9CCG9WW9R',
    props: {
      width: '17rem',
      height: '100%',
      backgroundColor: 'white',
      justifyContent: 'flex-start',
      flexDirection: 'column',
    },
    children: [
      'comp-K74M9CCGZGAAN',
      'comp-K74M9CCGNMBYL',
      'comp-K74M9CCGGMJ6O',
      'comp-K74M9CCGZMAHR',
      'comp-K74M9CCG6F4OJ',
    ],
    type: 'Flex',
    parent: 'comp-K74M9CCGQDXNZ',
    rootParentType: 'Flex',
  },
  'comp-K74M9CCGQDXNZ': {
    id: 'comp-K74M9CCGQDXNZ',
    props: {
      height: '100%',
    },
    children: [
      'comp-K74M9CCG94DEQ',
      'comp-K74M9CCGVB5K9',
      'comp-K74M9CCG9WW9R',
    ],
    type: 'Flex',
    parent: 'comp-K74M9CCGRSDT1',
    rootParentType: 'Flex',
  },
  'comp-K74M9CCGRSDT1': {
    id: 'comp-K74M9CCGRSDT1',
    props: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      color: '',
      backgroundColor: 'gray.100',
    },
    children: ['comp-K74M9CCGUBSH1', 'comp-K74M9CCGQDXNZ'],
    type: 'Flex',
    parent: 'comp-K74LPAIMR0ECA',
    rootParentType: 'Flex',
  },
  'comp-K74MDRB8N3GRS': {
    id: 'comp-K74MDRB8N3GRS',
    props: {
      size: 'sm',
      variant: 'outline',
      backgroundColor: 'gray.600',
      border: 'none',
      placeholder: 'Search components...',
    },
    children: [],
    type: 'Input',
    parent: 'comp-K74M9CCG94DEQ',
    rootParentType: 'Input',
  },
}
