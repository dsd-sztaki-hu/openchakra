import isBoolean from 'lodash/isBoolean'
import filter from 'lodash/filter'
import icons from '~iconsList'
import { propNames } from '@chakra-ui/react'
import { IComponent, IComponents } from '~core/Ocho'

const capitalize = (value: string) => {
  return value.charAt(0).toUpperCase() + value.slice(1)
}

export const formatCode = async (code: string) => {
  let formattedCode = `// 🚨 Your props contains invalid code`

  const prettier = await import('prettier/standalone')
  const babelParser = await import('prettier/parser-babel')

  try {
    formattedCode = prettier.format(code, {
      parser: 'babel',
      plugins: [babelParser],
      semi: false,
      singleQuote: true,
    })
  } catch (e) {
    console.error('Error: ', e)
  }

  return formattedCode
}

export type BuildBlockParams = {
  component: IComponent
  components: IComponents
  forceBuildBlock?: boolean
}

export const buildBlock = ({
  component,
  components,
  forceBuildBlock = false,
}: BuildBlockParams) => {
  let content = ''

  component.children.forEach((key: string) => {
    let childComponent = components[key]
    if (!childComponent) {
      console.error(`invalid component ${key}`)
    } else if (forceBuildBlock || !childComponent.componentName) {
      const componentName = capitalize(childComponent.type)
      let propsContent = ''

      const propsNames = Object.keys(childComponent.props).filter(
        (propName) => {
          if (childComponent.type === 'Icon') {
            return propName !== 'icon'
          }

          return true
        },
      )

      propsNames.forEach((propName: string) => {
        const propsValue = childComponent.props[propName]

        if (
          propName.toLowerCase().includes('icon') &&
          childComponent.type !== 'Icon'
        ) {
          if (Object.keys(icons).includes(propsValue)) {
            let operand = `={<${propsValue} />}`

            propsContent += `${propName}${operand} `
          }
        } else if (propName !== 'children' && propsValue) {
          let operand = `='${propsValue}'`

          if (propsValue === true || propsValue === 'true') {
            operand = ``
          } else if (
            propsValue === 'false' ||
            isBoolean(propsValue) ||
            !isNaN(propsValue)
          ) {
            operand = `={${propsValue}}`
          }

          propsContent += `${propName}${operand} `
        }
      })

      if (
        typeof childComponent.props.children === 'string' &&
        childComponent.children.length === 0
      ) {
        content += `<${componentName} ${propsContent}>${childComponent.props.children}</${componentName}>`
      } else if (childComponent.type === 'Icon') {
        content += `<${childComponent.props.icon} ${propsContent} />`
      } else if (childComponent.children.length) {
        content += `<${componentName} ${propsContent}>
      ${buildBlock({ component: childComponent, components, forceBuildBlock })}
      </${componentName}>`
      } else {
        content += `<${componentName} ${propsContent} />`
      }
    } else {
      content += `<${childComponent.componentName} />`
    }
  })

  return content
}

export const buildComponents = (components: IComponents) => {
  const codes = filter(components, (comp) => !!comp.componentName).map(
    (comp) => {
      return generateComponentCode({
        component: { ...components[comp.parent], children: [comp.id] },
        components,
        forceBuildBlock: true,
        componentName: comp.componentName,
      })
    },
  )

  return codes.reduce((acc, val) => {
    return `
      ${acc}

      ${val}
    `
  }, '')
}

type GenerateComponentCode = {
  component: IComponent
  components: IComponents
  componentName?: string
  forceBuildBlock?: boolean
}

export const generateComponentCode = ({
  component,
  components,
  componentName,
  forceBuildBlock,
}: GenerateComponentCode) => {
  let code = buildBlock({
    component,
    components,
    forceBuildBlock,
  })

  code = `
const ${componentName} = () => (
  ${code}
)`

  return code
}

const getIconsImports = (components: IComponents) => {
  return Object.keys(components).flatMap((name) => {
    return Object.keys(components[name].props)
      .filter((prop) => prop.toLowerCase().includes('icon'))
      .filter((prop) => !!components[name].props[prop])
      .map((prop) => components[name].props[prop])
  })
}

export const generateCode = async (components: IComponents) => {
  let code = buildBlock({ component: components.root, components })
  let componentsCodes = buildComponents(components)
  const iconImports = [...new Set(getIconsImports(components))]

  const imports = [
    ...new Set(
      Object.keys(components)
        .filter((name) => name !== 'root')
        .map((name) => components[name].type),
    ),
  ]

  code = `
    ${code}
  `

  // formatCode adds a ';' in front, get rid of that
  return (await formatCode(code)).substring(1)
}
