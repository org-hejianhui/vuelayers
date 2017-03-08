import ol from 'openlayers'
import layer from 'vl-components/layer/layer'
import styleTarget from 'vl-components/style/target'

const props = {
  updateWhileAnimating: {
    type: Boolean,
    default: false
  },
  updateWhileInteracting: {
    type: Boolean,
    default: false
  }
  // todo implement options
  // renderOrder: Function,
  // renderBuffer: Number
}

const methods = {
  createLayer () {
    return new ol.layer.Vector({
      id: this.id,
      minResolution: this.minResolution,
      maxResolution: this.maxResolution,
      opacity: this.opacity,
      visible: this.visible,
      preload: this.preload,
      projection: this.projection,
      extent: this.extent,
      zIndex: this.zIndex,
      updateWhileAnimating: this.updateWhileAnimating,
      updateWhileInteracting: this.updateWhileInteracting
    })
  },
  styleTarget () {
    return this.layer
  }
}

const { provide: layerProvide } = layer
const { provide: styleTargetProvide } = styleTarget

export default {
  mixins: [ layer, styleTarget ],
  props,
  methods,
  provide () {
    return {
      ...this::layerProvide(),
      ...this::styleTargetProvide()
    }
  }
}
