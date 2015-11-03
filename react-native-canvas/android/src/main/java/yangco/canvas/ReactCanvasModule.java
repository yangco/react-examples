/**
 * Created by yonee on 15/11/3.
 */
package yangco.canvas;

import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.support.annotation.NonNull;
import android.view.SurfaceView;
import android.view.View;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class ReactCanvasModule extends ReactContextBaseJavaModule {

    public ReactCanvasModule(ReactApplicationContext reactContext) {
        super(reactContext);

    }

    @Override
    public String getName() {
        return "RCTCanvasModule";
    }

    @ReactMethod
    public void drawLine(float startX, float startY, float stopX, float stopY){
        Bitmap bitmap = Bitmap.createBitmap(200, 200, Bitmap.Config.ARGB_8888);
        Canvas canvas = new Canvas(bitmap);
        Paint paint = new Paint();
        paint.setColor(Color.RED);
        canvas.drawLine(startX,startY,stopX,stopY,paint);
    }

}
