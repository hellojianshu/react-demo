/**
 * Created by chkui on 2016/11/16.
 */
module.exports = {
    entry: './entry.js',//����Ҫ�����js�ļ�
    output: {
        path: __dirname,
        filename: 'bundle.js' //����Ҫ�����js�ļ�
    },
    module: {
        loaders: [//�����������
            {test: /\.css$/, loader: 'style!css'}
        ]
    }
}
