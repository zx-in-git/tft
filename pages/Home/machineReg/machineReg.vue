<template>
	<view id="body">
		<!-- 头部注释 -->
		<view class="fr_top">
			<image class="fr_image" src="/static/public/mark.png" />
			<view class="view_p">注：为保证正常使用，请认真核对商户信息。</view>
		</view>

		<!-- 第一栏 -->
		<view class="selects">
			<view class="select">
			<navigator  hover-class="none"  url="machineChoice/mechChose">
				<view class="select-view">
					<view class="select-name">商户选择</view>
					<view class="select-text1" v-if="merch_no == ''">请选择</view>
					<view class="select-text1">{{ merch_no }}</view>
					<image class="select-image" src="/static/public/jiantou.png" />
				</view>
			</navigator>
			</view>
		</view>


		<!-- 第一栏 -->
		<view class="selects">
			<view class="select">
			<navigator  hover-class="none"  url="machineChoice/machineChoice">
				<view class="select-view">
					<view class="select-name">终端选择</view>
					<view class="select-text1" v-if="merchant_sn == ''">请选择</view>
					<view class="select-text1">{{ merchant_sn }}</view>
					<image class="select-image" src="/static/public/jiantou.png" />
				</view>
			</navigator>
			</view>
		</view>
		
		
		<button class="button1" @click="submit()">确 认 绑 定</button>

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
			merch_no	:	'',
			merchant_sn : 	'',
		};
	},
	
	onLoad(option) {
		this.merchant_sn = (option.merchant_sn == undefined ? '' : option.merchant_sn);
		this.merch_no    = option.merch_no == undefined ? '' : option.merch_no;
	},
	
	methods: {
		// 提交表单
		submit(){
			if (this.merchant_sn == '') {
				uni.showToast({ title: '请选择绑定的终端', icon: 'none' });
				return false;
			}
			
			if (this.merch_no == '') {
				uni.showToast({ title: '请选择绑定的商户', icon: 'none' });
				return false;
			}
			
			this.loadModal.text = '绑定中..';
			this.loadModal.show = true;
	
			net({ url: "/V1/bindMerchant", method: 'POST',
				data: {
					merch_no: this.merch_no,
					merchant_sn: this.merchant_sn
				},
	            success: (res) => {
					console.log(res)
					this.loadModal.show = false;
					if (res.data.success) {
						uni.showToast({ title: '绑定成功', icon: 'none',
							success : function(){
								setTimeout(function() { uni.navigateBack(); }, 1500);
							}
						});
					} else {
						uni.showToast({ title: res.data.error.message, icon: 'none' });
					}
	            },
	
				error: (res) => {
					this.loadModal.show = false;
				}
	      	})
		}
	}
};
</script>

<style lang="scss">
@import "@/pages/home/style/merchant_check_in.scss";
</style>
