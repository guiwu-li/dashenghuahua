import { SITE, NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-xl font-bold mb-3">{SITE.name}</div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {SITE.tagline}
              <br />
              专注 3–12 岁儿童美术在线教育
            </p>
          </div>

          {/* Links */}
          <div>
            <div className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">
              快速导航
            </div>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + QR */}
          <div>
            <div className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">
              联系我们
            </div>
            <p className="text-sm text-gray-400 mb-1">电话：{SITE.phone}</p>
            <p className="text-sm text-gray-400 mb-4">微信：扫码添加客服</p>
            {/* WeChat QR placeholder */}
            <div className="w-20 h-20 bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 text-xs">
              微信二维码
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            沪ICP备XXXXXXXX号-1 &nbsp;|&nbsp; 网络文化经营许可证 沪网文〔XXXX〕XXXX-XXX号
          </p>
        </div>
      </div>
    </footer>
  );
}
