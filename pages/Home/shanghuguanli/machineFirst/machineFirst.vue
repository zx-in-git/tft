<template>
	<view>
		<view class="titlebars">
			<!-- 头部内容栏 -->
			<view class="titlebar">
				<view class="rise">
					<view class="rise-head">
						<image class="head" src="/static/System/Merchant.png" />
						<view class="name">{{ merchantInfo.name }}</view>
						<view class="id">
							<view class="ID">商户号:{{ merchantInfo.code}}</view>
						</view>
					</view>
				</view>
			</view>
			<view class="hengxian"></view>
		</view>
		<view class="backgroundColor">
			
			<view class="data">
				<view class="phone">法人</view>
				<view class="mark">{{ merchantInfo.owner_name }}</view>
			</view>
			<view class="dara-xian"></view>
			
			<view class="data">
				<view class="phone">手机号</view>
				<view class="mark">{{ merchantInfo.phone }}</view>
			</view>
			<view class="dara-xian"></view>
			
			<view class="data">
				<view class="phone">商户状态</view>
				<view class="mark">{{ merchantInfo.state == '1' ? '正常商户' : '无效/注销商户' }}</view>
			</view>
			<view class="dara-xian"></view>

			<view class="data">
				<view class="phone">审核状态</view>
				<view class="mark">{{ merchantInfo.verfity_state == "1" ? '正常' : '失败'}}</view>
			</view>
			<view class="dara-xian"></view>
					
			
			<view class="data">
				<view class="phone">营业地址</view>
				<view class="mark">{{ merchantInfo.addr}}</view>
			</view>
			<view class="dara-xian"></view>
			
			
			<view class="dara-xian"></view>
			<navigator :url="'../trade/trade?merchant=' + merchantInfo.id">
				<view class="data">
					<view class="phone">交易明细</view>
					<view class="mark">查看</view>
				</view>
			</navigator>
			
			<view class="dara-xian"></view>
			<navigator :url="'../rate_details/rate_details?code=' + merchantInfo.merchant_code" v-if="type == 2">
				<view class="data">
					<view class="phone">商户费率</view>
					<view class="mark">查看</view>
				</view>
			</navigator>
		</view>
		
		<view class="cu-load load-modal" v-if="loadModal.show">
		   <image src="/static/public/loading.png" mode="aspectFit"></image>
		   <view class="gray-text">{{ loadModal.text }}</view>
		</view>
	</view>
</template>

<script>
import net from '@/common/net.js';

export default {
	data() {
		return {
			loadModal: { show: false, text: '加载中...' },
			
			type: '',
			mid: '',
			merchantInfo: [],
		};
	},
	
	onLoad(options) {
		this.type 	= uni.getStorageSync('type');

		this.mid = options.id ? options.id : '1';
		// 获取商户详细信息
		this.loadModal.show = true;
		this.getMerchangInfo(this.mid);
	},
	
	methods: {
		// 获取商户列表
		getMerchangInfo(mid){
			net({ url: '/V1/getMerchantInfo', method: 'GET', data:{ id: mid },
				success: (res) => {
					console.log(res)
					this.loadModal.show = false;
					if(res.data.success){
						this.merchantInfo = res.data.success.data;
					}else{
						uni.showToast({ title:red.data.error.message, icon: 'none', position: 'bottom' })
					}
				},
				error: (res) => {
					console.log(res)
					this.loadModal.show = false;
					uni.showToast({ title: '系统出错', icon: 'none', position: 'bottom' })
				}
			})
		}
		
	}
};
</script>

<style lang="scss">
	@import "@/pages/home/style/merchant_details.scss";
</style>