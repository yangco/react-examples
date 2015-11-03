package yangco.canvas;

/**
 * Created by Yonee on 2015/11/3.
 */

import com.facebook.drawee.backends.pipeline.Fresco;
import com.facebook.drawee.controller.AbstractDraweeControllerBuilder;
import com.facebook.react.uimanager.CatalystStylesDiffMap;
import com.facebook.react.uimanager.ReactProp;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

import javax.annotation.Nullable;


public class ReactCanvasManager extends SimpleViewManager<ReactCanvasView> {

    public static final String REACT_CLASS = "RCTCanvasView";

    @Override
    public String getName() {
        return REACT_CLASS;
    }


    @Override
    public ReactCanvasView createViewInstance(ThemedReactContext context) {
        return new ReactCanvasView(context);
    }

}