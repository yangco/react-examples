package yangco.canvas;

/**
 * Created by Yonee on 2015/11/3.
 */

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.view.View;

import com.facebook.drawee.view.GenericDraweeView;

public class ReactCanvasView extends GenericDraweeView {
    public ReactCanvasView(Context context) {
        super(context);
    }

    @Override
    public void onDraw(Canvas canvas) {
        // TODO Auto-generated method stub

        Paint paint = new Paint();
        paint.setColor(Color.BLUE);
        //设置字体大小
        paint.setTextSize(100);

        //让画出的图形是空心的
        paint.setStyle(Paint.Style.STROKE);
        //设置画出的线的 粗细程度
        paint.setStrokeWidth(5);
        //画出一根线
        canvas.drawLine(0, 0, 200, 200, paint);

        //画矩形
        canvas.drawRect(200, 500, 300, 300, paint);

        //画圆
        canvas.drawCircle(200, 200, 100, paint);
        //画出字符串 drawText(String text, float x, float y, Paint paint)
        // y 是 基准线 ，不是 字符串的 底部
        canvas.drawText("apple", 60, 60, paint);
        canvas.drawLine(0, 60, 500, 60, paint);

        //绘制图片
        // canvas.drawBitmap(BitmapFactory.decodeResource(getResources(), R.drawable.ic_launcher), 150, 150, paint);

        super.onDraw(canvas);
    }
}
